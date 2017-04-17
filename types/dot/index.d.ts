// Type definitions for doT 1.1
// Project: https://github.com/olado/doT
// Definitions by: ZombieHunter <https://github.com/ZombieHunter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace doT;

/** Version number */
export const version: string;

/** Default template settings */
export const templateSettings: TemplateSettings;

export type RenderFunction = (...args: any[]) => string;

/** Compile template */
export function template(tmpl: string, c?: TemplateSettings, def?: {}): RenderFunction;

/** For express */
export function compile(tmpl: string, def?: {}): RenderFunction;

export interface TemplateSettings {
	evaluate: RegExp;
	interpolate: RegExp;
	encode: RegExp;
	use: RegExp;
	useParams: RegExp;
	define: RegExp;
	defineParams: RegExp;
	conditional: RegExp;
	iterate: RegExp;
	varname: string;
	strip: boolean;
	append: boolean;
	selfcontained: boolean;
}

declare global {
	interface String {
		encodeHTML(): string;
	}
}