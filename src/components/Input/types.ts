import { RefObject } from 'react';
import { TIconType } from '../Icon/collection';

export interface InputProps {
    /**
     * toggle browsers ability to auto complete the input
     */
    autoComplete?: boolean;

    /**
     * Will automatically focus input on render
     */
    autoFocus?: boolean;

    /**
     * Will replace input div with a JSX element
     */
    customInput?: JSX.Element;

    /**
     * Description of input, Error state message overrides
     */
    description?: string;

    /**
     * it is best to set a unique ID for each input to verify change events
     */
    id?: string;

    /**
     * ref object
     */
    ref?: RefObject<HTMLInputElement>;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * standard onBlur that returns the entire event, it also checks validation rules
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * a short piece of text to fill the input before the user interacts
     */
    placeholder?: string;

    /**
     * Icon prefixIcon for the input field
     */
    prefixIcon?: TIconType;

    /**
     * Icon prefixIcon for the input field
     */
    iconPosition?: 'front' | 'end';

    /**
     * types of input available
     */
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';

    /**
     * standard HTML value prop
     */
    value?: string | number;

    /**
     * please give a descriptive name to the input, it help with accessibility
     */
    name?: string;

    /**
     * the input can use state to react to user interaction
     */
    state?: 'initial' | 'error' | 'confirmed' | 'disabled';

    /**
     * css style prop
     */
    style?: React.CSSProperties;

    /**
     * hides the input text when is true
     */
    inputHidden?: boolean;

    /**
     * input width
     */
    width?: string;

    /**
     * error message
     */
    errorMessage?: string;

    /**
     * shows copy icon
     */
    hasCopyButton?: boolean;

    /**
     * disables any interaction
     */
    disabled?: boolean;

    /**
     * You can validate your inputs
     * required, characterMinLength, characterMaxLength, numberMin, numberMax, regExp , regExpInvalidMessage
     */
    validation?: ValidateInput;

    /**
     * size of input
     */
    size?: 'regular' | 'large';

    /**
     * color of label background
     */
    labelBgColor?: string;
}

export interface LabelProps {
    /**
     * true if the label is defined
     */
    hasPrefix: boolean;

    /**
     * color of label background
     */
    labelBgColor?: string;
}

export type ValidateInput = {
    /**
     * is the input required
     */
    required?: boolean;

    /**
     * min length of characters that can be entered
     */
    characterMinLength?: number;

    /**
     * max length of characters that can be entered
     */
    characterMaxLength?: number;

    /**
     * min number validation is only for number inputs
     */
    numberMin?: number;

    /**
     * max number validation is only for number inputs
     */
    numberMax?: number;

    /**
     * a RegExp for this input passed as a string
     * EG: [A-Za-z] to only allow letters
     */
    regExp?: string;

    /**
     * user feedback text if the RegExp fails to pass
     */
    regExpInvalidMessage?: string;
};
