import React, { useRef, useState, useReducer, Dispatch } from 'react';
import styled from 'styled-components';
import { StyledTitle, Page, Spacer, Svg } from './index';
import { IPageProps } from '../util';
import { ContentSection } from './ContentSection';
import { theme } from '../styles/index';
import { Config, Validate } from '../util/index';
import { Api } from '../services';
import { Check, Dots, Cross } from './Svg';

interface IProps {
    className?: string;
    text?: string;
    dispatch?: Dispatch<FormAction>;
    valid?: boolean;
    fetching?: boolean;
    enabled?: boolean;
    dirty?: boolean;
    show?: boolean;
    style?: any;
}

enum FormSubmissionResult {
    None,
    Success,
    Fail
}

const StatusIcon = styled.div<IProps>`
    position: absolute;
    width: 20px;
    height: 20px;
    right: 15px;
    top: 15px;
    z-index: 2;
    transition: opacity 0.1s;
    opacity: ${({ show = true }) => (show ? 1 : 0)};

    > span {
        display: block;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        position: relative;
    }
`;
const StatusIconWrapper: React.FC<IProps> = ({
    className,
    valid = false,
    fetching = false,
    show = true
}) => {
    let Element = () => <Cross />;
    if (fetching) {
        Element = () => <Dots />;
    } else if (valid) {
        Element = () => <Check />;
    }
    return (
        <StatusIcon className={className} show={show}>
            <Element />
        </StatusIcon>
    );
};

const Input = styled.input<IProps>`
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    background: ${({ theme }) => `${theme.color.background}`};
    color: ${({ theme }) => `${theme.color.text}`};
    font-family: ${({ theme }) => `${theme.font.sans}`};
    padding: ${({ theme }) => `${theme.misc.inputPadding}`};
    cursor: ${({ enabled = true, fetching = false }) =>
        `${enabled && !fetching ? 'initial' : 'default'}`};
    width: 100%;
    margin-bottom: 20px;
`;
const InputInner = styled.div<IProps>`
    position: relative;
    transition: 0.3s opacity;
    opacity: ${({ enabled = true, fetching = false }) => `${enabled && !fetching ? 1 : 0.3}`};
`;
const InputWrapper: React.FC<IProps> = ({
    className,
    text = '',
    valid = false,
    enabled = true,
    fetching = false,
    dirty = false,
    dispatch
}) => {
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        let { value } = event.currentTarget;
        if (value.length > Config.emailLimit) {
            value = value.substr(0, Config.emailLimit);
        }
        dispatch!({ type: 'setEmail', text: value });
    };

    return (
        <InputInner enabled={enabled} fetching={fetching}>
            <h3>Email</h3>
            <div style={{ position: 'relative' }}>
                <Input
                    className={className}
                    onChange={onChange}
                    value={text}
                    enabled={enabled}
                    disabled={!enabled}
                    fetching={fetching}
                />
                <StatusIconWrapper valid={valid} show={dirty} />
            </div>
        </InputInner>
    );
};

const TextArea = styled.textarea<IProps>`
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    background: ${({ theme }) => `${theme.color.background}`};
    color: ${({ theme }) => `${theme.color.text}`};
    font-family: ${({ theme }) => `${theme.font.sans}`};
    padding: ${({ theme }) => `${theme.misc.inputPadding}`};
    cursor: ${({ enabled = true, fetching = false }) =>
        `${enabled && !fetching ? 'initial' : 'default'}`};
    width: 100%;
    resize: none;
    overflow: hidden;
    height: 40vh;
    margin-bottom: 20px;
`;
const TextAreaInner = styled.div<IProps>`
    position: relative;
    transition: 0.3s opacity;
    opacity: ${({ enabled = true, fetching = false }) => `${enabled && !fetching ? 1 : 0.3}`};
`;
const TextAreaWrapper: React.FC<IProps> = ({
    className,
    text = '',
    fetching = false,
    enabled = true,
    dispatch
}) => {
    const textAreaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const [init, setInit] = useState(false);
    const [minHeight, setMinHeight] = useState(0);

    const resize = () => {
        const ref: HTMLTextAreaElement = textAreaRef.current;
        if (!init) {
            setInit(true);
            setMinHeight(textAreaRef.current.offsetHeight);
        }
        const height: number = Math.max(minHeight, ref.scrollHeight + theme.misc.inputPadding);
        ref.style.height = `${height}px`;
    };

    const onChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        let { value } = event.currentTarget;
        if (value.length > Config.emailBodyLimit) {
            value = value.substr(0, Config.emailBodyLimit);
        }
        dispatch!({ type: 'setBody', text: value });
    };

    return (
        <TextAreaInner enabled={enabled} fetching={fetching}>
            <h3>Message</h3>
            <TextArea
                className={className}
                onKeyDown={resize}
                onChange={onChange}
                ref={textAreaRef}
                value={text}
                enabled={enabled}
                fetching={fetching}
                disabled={!enabled}
            />
        </TextAreaInner>
    );
};

interface ISubmitButtonProps extends IProps {
    children?: React.ReactChildren | string;
    body?: string;
    email?: string;
    valid?: boolean;
    enabled?: boolean;
}
const SubmitButton = styled.button<ISubmitButtonProps>`
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    background: ${({ theme }) => `${theme.color.background}`};
    color: ${({ theme }) => `${theme.color.text}`};
    font-family: ${({ theme }) => `${theme.font.sans}`};
    padding: ${({ theme }) => `${theme.misc.inputPadding}`};
    transition: 0.3s opacity;
    opacity: ${({ valid, enabled = true, fetching = false }) =>
        `${valid && enabled && !fetching ? 1 : 0.3}`};
    cursor: ${({ valid, enabled = true, fetching = false }) =>
        `${valid && enabled && !fetching ? 'pointer' : 'initial'}`};
    font-weight: bold;
`;
const SubmitButtonWrapper: React.FC<ISubmitButtonProps> = ({
    className,
    body,
    email,
    valid = false,
    fetching = false,
    enabled = true,
    dispatch
}) => {
    const submit = async () => {
        if (!valid || !enabled) {
            return;
        }

        try {
            dispatch!({ type: 'fetching' });
            await Api.sendEmail(email!, body!);
            dispatch!({ type: 'gotResult', result: FormSubmissionResult.Success });
        } catch (error) {
            dispatch!({ type: 'gotResult', result: FormSubmissionResult.Fail });
        }
    };
    return (
        <SubmitButton
            className={className}
            onClick={submit}
            valid={valid}
            enabled={enabled}
            fetching={fetching}
        >
            Submit
        </SubmitButton>
    );
};

interface FormState {
    email: string;
    emailIsDirty: boolean;
    emailIsValid: boolean;
    body: string;
    bodyIsValid: boolean;
    isValid: boolean;
    fetching: boolean;
    result: FormSubmissionResult;
    enabled: boolean;
}
type FormActionTypes = 'setEmail' | 'setBody' | 'fetching' | 'gotResult';
interface FormAction {
    type: FormActionTypes;
    text?: string;
    result?: number;
}
const EmailIsValid = (email: string) => email.length < Config.emailLimit && Validate.email(email);
const BodyIsValid = (body: string) => body.length > 0 && body.length < Config.emailBodyLimit;
const FormReducer = (state: FormState, action: FormAction) => {
    let valid: boolean;
    switch (action.type) {
        case 'setEmail':
            valid = EmailIsValid(action.text!);
            return {
                ...state,
                email: action.text,
                emailIsValid: valid,
                emailIsDirty: true,
                isValid: valid && state.bodyIsValid
            };
        case 'setBody':
            valid = BodyIsValid(action.text!);
            return {
                ...state,
                body: action.text,
                bodyIsValid: valid,
                isValid: valid && state.emailIsValid
            };
        case 'fetching':
            return {
                ...state,
                fetching: true
            };
        case 'gotResult':
            return {
                ...state,
                fetching: false,
                result: action.result,
                enabled: action.result === FormSubmissionResult.Success ? false : state.enabled
            };
        default:
            return state;
    }
};
const Form: React.FC<IProps> = ({ className }) => {
    const [state, dispatch] = useReducer(FormReducer, {
        email: '',
        emailIsDirty: false,
        emailIsValid: false,
        body: '',
        bodyIsValid: false,
        isValid: false,
        fetching: false,
        result: FormSubmissionResult.None,
        enabled: true
    });

    return (
        <div className={className}>
            <InputWrapper
                dispatch={dispatch}
                text={state.email}
                valid={state.emailIsValid}
                enabled={state.enabled}
                fetching={state.fetching}
                dirty={state.emailIsDirty}
            />
            <TextAreaWrapper
                dispatch={dispatch}
                text={state.body}
                valid={state.bodyIsValid}
                fetching={state.fetching}
                enabled={state.enabled}
            />
            <SubmitButtonWrapper
                dispatch={dispatch}
                valid={state.isValid}
                email={state.email}
                fetching={state.fetching}
                body={state.body}
                enabled={state.enabled}
            />
            <StatusIconWrapper
                valid={state.result === FormSubmissionResult.Success}
                fetching={state.fetching}
                show={state.fetching || state.result !== FormSubmissionResult.None}
            />
        </div>
    );
};

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const Contact: React.FC<IPageProps> = ({ route }) => (
    <Page id={route}>
        <StyledTitle visible={76}>Contact</StyledTitle>
        <Wrapper>
            <ContentSection underlined={false}>
                <Form />
            </ContentSection>
            <Spacer height={1000} count={20} />
        </Wrapper>
    </Page>
);
