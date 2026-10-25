// Theme Builder: Maps a color palette to complete VS Code UI tokens and TextMate grammar rules
module.exports = function buildTheme(palette) {
  return {
    name: palette.name,
    type: "dark",
    semanticHighlighting: true,
    colors: {
      "focusBorder": palette.primary,
      "foreground": palette.fg,
      "widget.shadow": "#00000066",
      "selection.background": palette.bgSelection,
      "descriptionForeground": palette.fgMuted,
      "errorForeground": palette.tertiary,

      // Activity Bar
      "activityBar.background": palette.bgPanel,
      "activityBar.foreground": palette.primary,
      "activityBar.inactiveForeground": palette.fgMuted,
      "activityBar.border": palette.border,
      "activityBarBadge.background": palette.primary,
      "activityBarBadge.foreground": palette.bgDark,

      // Sidebar
      "sideBar.background": palette.bgPanel,
      "sideBar.foreground": palette.fg,
      "sideBar.border": palette.border,
      "sideBarTitle.foreground": palette.primary,
      "sideBarSectionHeader.background": palette.bgElevated,
      "sideBarSectionHeader.foreground": palette.primary,
      "sideBarSectionHeader.border": palette.border,

      // Editor & Canvas
      "editor.background": palette.bg,
      "editor.foreground": palette.fg,
      "editorLineNumber.foreground": palette.fgMuted,
      "editorLineNumber.activeForeground": palette.primary,
      "editorCursor.foreground": palette.primary,
      "editor.selectionBackground": palette.bgSelection,
      "editor.inactiveSelectionBackground": palette.bgSelection + "99",
      "editor.selectionHighlightBackground": palette.bgSelection + "80",
      "editor.wordHighlightBackground": palette.primary + "26",
      "editor.wordHighlightStrongBackground": palette.primary + "40",
      "editor.findMatchBackground": palette.amber + "66",
      "editor.findMatchHighlightBackground": palette.amber + "33",
      "editor.lineHighlightBackground": palette.bgHover + "80",
      "editor.lineHighlightBorder": "#00000000",
      "editorIndentGuide.background1": palette.border,
      "editorIndentGuide.activeBackground1": palette.primary + "66",
      "editorRuler.foreground": palette.border,
      "editorBracketMatch.background": palette.primary + "33",
      "editorBracketMatch.border": palette.primary,

      // Editor Tabs & Groups
      "editorGroup.border": palette.border,
      "editorGroupHeader.tabsBackground": palette.bgDark,
      "editorGroupHeader.noTabsBackground": palette.bgDark,
      "tab.activeBackground": palette.bg,
      "tab.activeForeground": palette.primary,
      "tab.activeBorderTop": palette.primary,
      "tab.inactiveBackground": palette.bgDark,
      "tab.inactiveForeground": palette.fgMuted,
      "tab.hoverBackground": palette.bgElevated,
      "tab.hoverForeground": palette.fg,
      "tab.border": palette.border,
      "tab.unfocusedActiveBorderTop": palette.primary + "80",

      // Title Bar
      "titleBar.activeBackground": palette.bgPanel,
      "titleBar.activeForeground": palette.fg,
      "titleBar.inactiveBackground": palette.bgDark,
      "titleBar.inactiveForeground": palette.fgMuted,
      "titleBar.border": palette.border,

      // Status Bar
      "statusBar.background": palette.bgPanel,
      "statusBar.foreground": palette.fg,
      "statusBar.border": palette.border,
      "statusBar.debuggingBackground": palette.tertiary,
      "statusBar.debuggingForeground": "#FFFFFF",
      "statusBar.noFolderBackground": palette.bgDark,
      "statusBarItem.hoverBackground": palette.borderSubtle,
      "statusBarItem.activeBackground": palette.primary + "33",

      // Panel & Terminal
      "panel.background": palette.bg,
      "panel.border": palette.border,
      "panelTitle.activeForeground": palette.primary,
      "panelTitle.inactiveForeground": palette.fgMuted,
      "panelTitle.activeBorder": palette.primary,

      "terminal.background": palette.bg,
      "terminal.foreground": palette.fg,
      "terminal.ansiBlack": palette.bgElevated,
      "terminal.ansiRed": palette.tertiary,
      "terminal.ansiGreen": palette.green,
      "terminal.ansiYellow": palette.amber,
      "terminal.ansiBlue": palette.secondary,
      "terminal.ansiMagenta": palette.primary,
      "terminal.ansiCyan": palette.teal,
      "terminal.ansiWhite": palette.fg,
      "terminal.ansiBrightBlack": palette.fgMuted,
      "terminal.ansiBrightRed": palette.tertiaryLight,
      "terminal.ansiBrightGreen": palette.green,
      "terminal.ansiBrightYellow": palette.amber,
      "terminal.ansiBrightBlue": palette.secondary,
      "terminal.ansiBrightMagenta": palette.primaryHover,
      "terminal.ansiBrightCyan": palette.teal,
      "terminal.ansiBrightWhite": "#FFFFFF",

      // UI Controls (Buttons, Inputs, Dropdowns, Lists)
      "button.background": palette.primary,
      "button.foreground": palette.bgDark,
      "button.hoverBackground": palette.primaryHover,
      "button.secondaryBackground": palette.bgActive,
      "button.secondaryForeground": palette.fg,
      "button.secondaryHoverBackground": palette.bgActive + "E6",

      "input.background": palette.bgElevated,
      "input.foreground": palette.fg,
      "input.border": palette.border,
      "input.placeholderForeground": palette.fgMuted,
      "inputOption.activeBorder": palette.primary,

      "dropdown.background": palette.bgElevated,
      "dropdown.foreground": palette.fg,
      "dropdown.border": palette.border,

      "list.activeSelectionBackground": palette.bgActive,
      "list.activeSelectionForeground": "#FFFFFF",
      "list.inactiveSelectionBackground": palette.bgElevated,
      "list.inactiveSelectionForeground": palette.fg,
      "list.hoverBackground": palette.bgHover,
      "list.hoverForeground": "#FFFFFF",
      "list.focusBackground": palette.bgActive,
      "list.highlightForeground": palette.primary,

      "badge.background": palette.primary,
      "badge.foreground": palette.bgDark,
      "progressBar.background": palette.primary,

      // Git Decorations
      "gitDecoration.addedResourceForeground": palette.green,
      "gitDecoration.modifiedResourceForeground": palette.amber,
      "gitDecoration.deletedResourceForeground": palette.tertiary,
      "gitDecoration.untrackedResourceForeground": palette.secondary,
      "gitDecoration.ignoredResourceForeground": palette.fgMuted,

      // Breadcrumbs & Notifications
      "breadcrumb.foreground": palette.fgMuted,
      "breadcrumb.background": palette.bg,
      "breadcrumb.activeSelectionForeground": palette.primary,
      "breadcrumb.focusForeground": palette.fg,

      "notifications.background": palette.bgElevated,
      "notifications.foreground": palette.fg,
      "notifications.border": palette.borderSubtle,
      "notificationLink.foreground": palette.primary
    },
    tokenColors: [
      {
        name: "Comments & Documentation",
        scope: [
          "comment",
          "comment.line",
          "comment.block",
          "comment.block.documentation",
          "punctuation.definition.comment"
        ],
        settings: {
          foreground: palette.comment,
          fontStyle: "italic"
        }
      },
      {
        name: "Keywords & Storage Modifiers",
        scope: [
          "keyword",
          "keyword.control",
          "keyword.control.flow",
          "keyword.control.import",
          "keyword.control.from",
          "keyword.control.export",
          "keyword.control.conditional",
          "keyword.control.loop",
          "keyword.control.trycatch",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.logical",
          "keyword.operator.delete",
          "storage",
          "storage.type",
          "storage.modifier"
        ],
        settings: {
          foreground: palette.tertiary
        }
      },
      {
        name: "Language Constants (this, super, self, arguments)",
        scope: [
          "variable.language.this",
          "variable.language.super",
          "variable.language.arguments",
          "variable.language.special.self.python",
          "variable.parameter.function.language.special.self.python",
          "variable.parameter.function.language.special.cls.python"
        ],
        settings: {
          foreground: palette.tertiary,
          fontStyle: "italic"
        }
      },
      {
        name: "Functions & Method Declarations",
        scope: [
          "entity.name.function",
          "entity.name.method",
          "support.function",
          "meta.function-call",
          "meta.method-call"
        ],
        settings: {
          foreground: palette.primary,
          fontStyle: "bold"
        }
      },
      {
        name: "React Hooks & Framework Functions",
        scope: [
          "support.function.react",
          "entity.name.function.react",
          "support.function.builtin"
        ],
        settings: {
          foreground: palette.primary,
          fontStyle: "bold"
        }
      },
      {
        name: "Classes, Interfaces, Types & Generics",
        scope: [
          "entity.name.type",
          "entity.name.type.class",
          "entity.name.class",
          "entity.other.inherited-class",
          "support.class",
          "support.type",
          "entity.name.type.interface",
          "entity.name.type.module",
          "entity.name.type.alias",
          "entity.name.type.enum"
        ],
        settings: {
          foreground: palette.secondary
        }
      },
      {
        name: "Strings & Character Literals",
        scope: [
          "string",
          "string.quoted",
          "string.quoted.single",
          "string.quoted.double",
          "string.template",
          "punctuation.definition.string"
        ],
        settings: {
          foreground: palette.amber
        }
      },
      {
        name: "String Interpolation & Template Punctuation",
        scope: [
          "punctuation.definition.template-expression",
          "punctuation.section.embedded",
          "meta.template.expression"
        ],
        settings: {
          foreground: palette.tertiary
        }
      },
      {
        name: "Numbers, Units & Booleans",
        scope: [
          "constant.numeric",
          "constant.numeric.integer",
          "constant.numeric.float",
          "constant.numeric.hex",
          "constant.language.boolean",
          "constant.language.null",
          "constant.language.undefined",
          "constant.language",
          "keyword.other.unit"
        ],
        settings: {
          foreground: palette.green
        }
      },
      {
        name: "Variables & Parameters",
        scope: [
          "variable",
          "variable.other",
          "variable.other.readwrite",
          "variable.parameter",
          "meta.parameter"
        ],
        settings: {
          foreground: palette.fg
        }
      },
      {
        name: "Object Keys & Properties",
        scope: [
          "meta.object-literal.key",
          "variable.other.property",
          "variable.other.object.property",
          "support.type.property-name",
          "meta.property-name"
        ],
        settings: {
          foreground: palette.mauve
        }
      },
      {
        name: "HTML & JSX Native Tags",
        scope: [
          "entity.name.tag",
          "entity.name.tag.html",
          "entity.name.tag.structure.any.html",
          "meta.tag.sgml",
          "punctuation.definition.tag"
        ],
        settings: {
          foreground: palette.tertiary
        }
      },
      {
        name: "React / Vue / Svelte Custom Component Tags",
        scope: [
          "support.class.component",
          "entity.name.tag.custom",
          "entity.name.tag.tsx",
          "entity.name.tag.jsx",
          "meta.tag.custom"
        ],
        settings: {
          foreground: palette.secondary,
          fontStyle: "bold"
        }
      },
      {
        name: "HTML & JSX Attributes",
        scope: [
          "entity.other.attribute-name",
          "entity.other.attribute-name.html",
          "entity.other.attribute-name.jsx",
          "entity.other.attribute-name.tsx"
        ],
        settings: {
          foreground: palette.mauve,
          fontStyle: "italic"
        }
      },
      {
        name: "CSS Property Names",
        scope: [
          "support.type.property-name.css",
          "support.type.property-name.scss",
          "support.type.property-name.less",
          "meta.property-name.css"
        ],
        settings: {
          foreground: palette.secondary
        }
      },
      {
        name: "CSS Property Values & Constants",
        scope: [
          "support.constant.property-value.css",
          "support.constant.property-value.scss",
          "meta.property-value.css",
          "support.constant.font-name"
        ],
        settings: {
          foreground: palette.amber
        }
      },
      {
        name: "CSS Class Selectors",
        scope: [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.scss"
        ],
        settings: {
          foreground: palette.green
        }
      },
      {
        name: "CSS ID Selectors",
        scope: [
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.id.scss"
        ],
        settings: {
          foreground: palette.primary,
          fontStyle: "bold"
        }
      },
      {
        name: "CSS Pseudo-Classes & Pseudo-Elements",
        scope: [
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.pseudo-class.scss",
          "entity.other.attribute-name.pseudo-element.scss"
        ],
        settings: {
          foreground: palette.tertiary,
          fontStyle: "italic"
        }
      },
      {
        name: "CSS Variables & At-Rules",
        scope: [
          "variable.css",
          "variable.argument.css",
          "keyword.control.at-rule.css",
          "keyword.control.at-rule.media.css",
          "keyword.control.at-rule.keyframes.css"
        ],
        settings: {
          foreground: palette.primary
        }
      },
      {
        name: "Python & Java Annotations and Decorators",
        scope: [
          "entity.name.function.decorator.python",
          "punctuation.definition.decorator.python",
          "meta.decorator",
          "storage.type.annotation.java",
          "punctuation.definition.annotation.java"
        ],
        settings: {
          foreground: palette.mauve,
          fontStyle: "italic"
        }
      },
      {
        name: "Python Magic Methods & Builtins",
        scope: [
          "support.function.magic.python",
          "entity.name.function.magic.python",
          "support.function.builtin.python",
          "support.type.python"
        ],
        settings: {
          foreground: palette.secondary
        }
      },
      {
        name: "Python Docstrings",
        scope: [
          "string.quoted.docstring.multi.python",
          "string.quoted.docstring.single.python"
        ],
        settings: {
          foreground: palette.comment,
          fontStyle: "italic"
        }
      },
      {
        name: "Java Primitive Types & Modifiers",
        scope: [
          "storage.type.primitive.java",
          "storage.type.primitive.array.java",
          "storage.modifier.java",
          "storage.modifier.package.java",
          "storage.modifier.import.java"
        ],
        settings: {
          foreground: palette.tertiary
        }
      },
      {
        name: "Java Classes, Interfaces & Enums",
        scope: [
          "entity.name.type.class.java",
          "entity.name.type.interface.java",
          "storage.type.object.array.java",
          "constant.other.enum.java"
        ],
        settings: {
          foreground: palette.secondary
        }
      },
      {
        name: "JSON & YAML Object Keys",
        scope: [
          "support.type.property-name.json",
          "entity.name.tag.yaml"
        ],
        settings: {
          foreground: palette.secondary
        }
      },
      {
        name: "Regular Expressions",
        scope: [
          "string.regexp",
          "constant.character.escape.backslash.regexp"
        ],
        settings: {
          foreground: palette.teal
        }
      },
      {
        name: "Operators & Punctuation",
        scope: [
          "keyword.operator",
          "keyword.operator.assignment",
          "keyword.operator.arithmetic",
          "keyword.operator.comparison",
          "keyword.operator.ternary",
          "punctuation.separator",
          "punctuation.terminator",
          "punctuation.accessor"
        ],
        settings: {
          foreground: palette.punctuation
        }
      },
      {
        name: "Brackets, Curly Braces & Parentheses",
        scope: [
          "punctuation.section",
          "punctuation.definition.parameters",
          "punctuation.definition.block",
          "meta.brace"
        ],
        settings: {
          foreground: palette.bracket
        }
      },
      {
        name: "Markdown Headings",
        scope: [
          "heading.1.markdown",
          "heading.2.markdown",
          "heading.3.markdown",
          "markup.heading"
        ],
        settings: {
          foreground: palette.primary,
          fontStyle: "bold"
        }
      },
      {
        name: "Markdown Links",
        scope: [
          "markup.underline.link",
          "string.other.link"
        ],
        settings: {
          foreground: palette.secondary
        }
      },
      {
        name: "Markdown Bold & Italic",
        scope: [
          "markup.bold"
        ],
        settings: {
          foreground: palette.tertiary,
          fontStyle: "bold"
        }
      },
      {
        name: "Markdown Code Blocks & Inline Code",
        scope: [
          "markup.raw.inline",
          "markup.raw.block"
        ],
        settings: {
          foreground: palette.green
        }
      }
    ]
  };
};
