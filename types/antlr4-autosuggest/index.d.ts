// Type definitions for antlr4-autosuggest 0.0
// Project: https://github.com/oranoran/antlr4-autosuggest-js
// Definitions by: Jon Freedman <https://github.com/jonfreedman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as antlr4 from 'antlr4';

export type CasePreference = 'LOWER' | 'UPPER' | 'BOTH';

export interface AutoSuggester {
    autosuggest: (inputText: string) => string[];
}

export interface Constructor<T> {
    new (...args: any[]): T;
}

export function autosuggester<Lexer extends antlr4.Lexer, Parser extends antlr4.Parser>(lexerCtr: Constructor<Lexer>, parserCtr: Constructor<Parser>, casePref?: CasePreference | null): AutoSuggester;
