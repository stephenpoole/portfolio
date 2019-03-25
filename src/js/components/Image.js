import React from 'react';
import { Config } from '../util';

export const Image = ({ src, ...props }) => <img {...props} src={`${Config.imagePrefix}${src}`} />;
