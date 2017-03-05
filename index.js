module.exports = {
  // Full rule definitions at https://palantir.github.io/tslint/rules/
  "rules": {
    "typedef": [true,
      "call-signature",
      "parameter",
      "property-declaration",
      "member-variable-declaration",
      "object-destructuring",
      "array-destructuring"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "unified-signatures": true,

    "curly": true,
    "forin": true,
    "label-position": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-duplicate-variable": true,
    "no-for-in-array": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-unused-variable": true,
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "no-void-expression": true,
    "restrict-plus-operands": true,
    "triple-equals": [true,
      "allow-null-check",
      "allow-undefined-check"
    ],
    "typeof-compare": true,
    "use-isnan": true,

    "eofline": true,
    "indent": [true, "spaces"],
    "linebreak-style": [true, "LF"],
    "max-classes-per-file": [true, 1],
    "max-line-length": [true, 120],
    "prefer-const": true,
    "trailing-comma": [true,
      {
        "multiline": "always",
        "singleline": "never"
      }
    ],

    "align": [true,
      "parameters",
      "arguments",
      "statements"
    ],
    "arrow-parens": [true,
      "ban-single-arg-parens"
    ],
    "arrow-return-shorthand": [true,
      "multiline"
    ],
    "class-name": true,
    "comment-format": [true,
      "check-space"
    ],
    "completed-docs": true,
    "import-spacing": true,
    "interface-name": [true,
      "always-prefix"
    ],
    "interface-over-type-literal": true,
    "jsdoc-format": true,
    "new-parens": true,
    "no-boolean-literal-compare": true,
    "no-consecutive-blank-lines": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unnecessary-qualifier": true,
    // This seems like a good rule to have, but I'm not sure what it should be;
    // see https://palantir.github.io/tslint/rules/object-literal-key-quotes/
    // "object-literal-key-quotes": [true, "always", "as-needed", "consistent", "consistent-as-needed"],
    "object-literal-shorthand": true,
    "one-line": [true,
      "check-open-brace"
    ],
    "one-variable-per-declaration": [true,
      "ignore-for-loop"
    ],
    "prefer-function-over-method": true,
    "prefer-method-signature": true,
    "quotemark": [true,
      "single",
      "avoid-escape"
    ],
    "semicolon": [true,
      "always",
      "ignore-bound-class-methods"
    ],
    "space-before-function-paren": [true,
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always",
        "method": "never",
        "constructor": "never"
      }
    ],
    "variable-name": [true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore",
      "allow-trailing-underscore"
    ],
    "whitespace": [true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-type",
      "check-typecast",
      "check-preblock"
    ]
  }
};
