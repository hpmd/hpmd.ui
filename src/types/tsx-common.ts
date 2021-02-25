export type ElementBoundary = 'scrollParent' | 'window' | 'viewport' | HTMLElement;

export type SubmitEvent = Event & { submitter: HTMLElement };
export type TextAlign = 'left' | 'center' | 'right';
export type VueCssClassObject = { [key: string]: boolean };
export type VueCssClass = string | VueCssClassObject | Array<string | VueCssClassObject>;
