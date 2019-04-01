import React, { useRef, useState, useContext, useReducer, Dispatch, useEffect } from 'react';
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
}

enum FormSubmissionResult {
    None,
    Success,
    Fail
}

const StatusIcon = styled.div<IProps>`
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 2;
`;
const StatusIconWrapper: React.FC<IProps> = ({ className, valid = false, fetching = false }) => {
    let Element = () => <Cross />;
    if (fetching) {
        Element = () => <Dots />;
    } else if (valid) {
        Element = () => <Check />;
    }
    return (
        <StatusIcon className={className}>
            <Element />
        </StatusIcon>
    );
};

const Input = styled.input`
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    background: ${({ theme }) => `${theme.color.background}`};
    color: ${({ theme }) => `${theme.color.text}`};
    font-family: ${({ theme }) => `${theme.font.sans}`};
    padding: ${({ theme }) => `${theme.misc.inputPadding}`};
    width: 100%;
    margin-bottom: 20px;
`;
const InputWrapper: React.FC<IProps> = ({ className, text = '', valid = false, dispatch }) => {
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        let { value } = event.currentTarget;
        if (value.length > Config.emailLimit) {
            value = value.substr(0, Config.emailLimit);
        }
        dispatch!({ type: 'setEmail', text: value });
    };

    return (
        <div>
            <Input className={className} onChange={onChange} value={text} />
            <StatusIconWrapper valid={valid} />
        </div>
    );
};

const TextArea = styled.textarea`
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    background: ${({ theme }) => `${theme.color.background}`};
    color: ${({ theme }) => `${theme.color.text}`};
    font-family: ${({ theme }) => `${theme.font.sans}`};
    padding: ${({ theme }) => `${theme.misc.inputPadding}`};
    width: 100%;
    resize: none;
    overflow: hidden;
    height: 40vh;
    margin-bottom: 20px;
`;
const TextAreaWrapper: React.FC<IProps> = ({ className, text = '', valid = false, dispatch }) => {
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
        <div>
            <TextArea
                className={className}
                onKeyDown={resize}
                onChange={onChange}
                ref={textAreaRef}
                value={text}
            />
            <StatusIconWrapper valid={valid} />
        </div>
    );
};

interface ISubmitButtonProps extends IProps {
    children?: React.ReactChildren | string;
    body?: string;
    email?: string;
    valid?: boolean;
}
const SubmitButton = styled.button<ISubmitButtonProps>`
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    background: ${({ theme }) => `${theme.color.background}`};
    color: ${({ theme }) => `${theme.color.text}`};
    font-family: ${({ theme }) => `${theme.font.sans}`};
    padding: ${({ theme }) => `${theme.misc.inputPadding}`};
    transition: 0.3s opacity;
    opacity: ${({ valid }) => `${valid ? 1 : 0.3}`};
    font-weight: bold;
    cursor: ${({ valid }) => `${valid ? 'pointer' : 'initial'}`};
`;
const SubmitButtonWrapper: React.FC<ISubmitButtonProps> = ({
    className,
    valid,
    body,
    email,
    dispatch
}) => {
    const submit = async () => {
        if (!valid) {
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
        <SubmitButton className={className} onClick={submit} valid={valid}>
            Submit
        </SubmitButton>
    );
};

interface FormState {
    email: string;
    emailIsValid: boolean;
    body: string;
    bodyIsValid: boolean;
    isValid: boolean;
    fetching: boolean;
    result: FormSubmissionResult;
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
                result: action.result
            };
        default:
            return state;
    }
};
const Form: React.FC<IProps> = ({ className }) => {
    const [state, dispatch] = useReducer(FormReducer, {
        email: '',
        emailIsValid: false,
        body: '',
        bodyIsValid: false,
        isValid: false,
        fetching: false,
        result: FormSubmissionResult.None
    });

    return (
        <div className={className}>
            <h3>Email</h3>
            <InputWrapper dispatch={dispatch} text={state.email} valid={state.emailIsValid} />
            <h3>Message</h3>
            <TextAreaWrapper dispatch={dispatch} text={state.body} valid={state.bodyIsValid} />
            <SubmitButtonWrapper
                dispatch={dispatch}
                valid={state.isValid}
                email={state.email}
                body={state.body}
            />
        </div>
    );
};

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const Contact: React.FC<IPageProps> = ({ route }) => (
    <Page id={route.name}>
        <StyledTitle visible={76}>Contact</StyledTitle>
        <Wrapper>
            <ContentSection underlined={false}>
                <Form />
            </ContentSection>
            <Spacer height={1000} count={20} />
        </Wrapper>
    </Page>
);
