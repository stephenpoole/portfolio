import React from 'react';

export const WorkMedia = ({ link }) => {
    const { filetype, type } = (link => {
        const filetype = link.substring(link.lastIndexOf('.') + 1);

        switch (filetype) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'svg':
            case 'gif':
            case 'tiff':
                return {
                    type: 'image',
                    filetype
                };
            case 'mp4':
            case 'ogg':
            case 'mov':
            case 'webm':
                return {
                    type: 'video',
                    filetype
                };
            default:
                return {
                    type: '',
                    filetype
                };
        }
    })(link);

    if (type === 'image') {
        return <img src={link} />;
    } else if (type === 'video') {
        const filetype = link.substring(link.lastIndexOf('.') + 1);
        return (
            <video>
                <source src={link} type={`video/${filetype}`} />
            </video>
        );
    }

    return <></>;
};
