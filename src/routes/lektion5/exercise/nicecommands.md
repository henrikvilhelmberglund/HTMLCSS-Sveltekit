{
  "key": "ctrl+shift+down",
  "command": "editor.action.addSelectionToNextFindMatch",
  "when": "editorFocus"
},
{
  "key": "ctrl+shift+up",
  "command": "editor.action.addSelectionToPreviousFindMatch"
},
{
  "key": "shift+alt+down",
  "command": "editor.action.copyLinesDownAction",
  "when": "editorTextFocus && !editorReadonly"
},
{
  "key": "shift+alt+up",
  "command": "editor.action.copyLinesUpAction",
  "when": "editorTextFocus && !editorReadonly"
},
{
  "key": "ctrl+alt+z",
  "command": "cursorUndo",
  "when": "textInputFocus"
},
{
  "key": "alt+backspace",
  "command": "editor.action.deleteLines",
  "when": "textInputFocus && !editorReadonly"
},
{
  "key": "ctrl+oem_5",
  "command": "editor.emmet.action.splitJoinTag"
},
{
  "key": "alt+oem_5",
  "command": "editor.emmet.action.wrapWithAbbreviation"
},
{
  "key": "shift+up",
  "command": "editor.action.smartSelect.shrink",
  "when": "editorTextFocus"
},
{
  "key": "shift+down",
  "command": "editor.action.smartSelect.expand",
  "when": "editorTextFocus"
},
{
  "key": "ctrl+shift+t",
  "command": "explorer.newFolder"
},
{
  "key": "ctrl+shift+o",
  "command": "workbench.action.files.openFolder",
  "when": "openFolderWorkspaceSupport"
},
{
  "key": "alt+f12",
  "command": "editor.action.revealDefinition",
  "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
},
{
  "key": "shift+f12",
  "command": "editor.action.goToReferences",
  "when": "editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
},
{
  "key": "ctrl+alt+down",
  "command": "workbench.action.gotoSymbol"
},
{
  "key": "ctrl+enter",
  "command": "editor.action.insertLineBefore",
  "when": "editorTextFocus && !editorReadonly"
},
{
  "key": "shift+enter",
  "command": "editor.action.insertLineAfter",
  "when": "editorTextFocus && !editorReadonly"
},
{
  "key": "ctrl+up",
  "command": "bracket-jumper.jumpLeft",
  "when": "editorTextFocus"
},
{
  "key": "ctrl+down",
  "command": "bracket-jumper.jumpRight",
  "when": "editorTextFocus"
},
{
  "key": "ctrl+shift+right",
  "command": "editor.action.moveSelectionToNextFindMatch",
  "when": "editorFocus"
},
{
  "key": "ctrl+shift+left",
  "command": "editor.action.moveSelectionToPreviousFindMatch"
},
{
  "key": "alt+down",
  "command": "editor.action.moveLinesDownAction",
  "when": "editorTextFocus && !editorReadonly"
},
{
  "key": "alt+up",
  "command": "editor.action.moveLinesUpAction",
  "when": "editorTextFocus && !editorReadonly"
},
{
  "key": "f12",
  "command": "editor.action.peekDefinition",
  "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
},
{
  "key": "ctrl+k ctrl+s",
  "command": "workbench.action.openGlobalKeybindings"
},
{
  "key": "ctrl+oem_period",
  "command": "editor.action.quickFix",
  "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
},
{
  "key": "ctrl+h",
  "command": "editor.action.startFindReplaceAction",
  "when": "editorFocus || editorIsOpen"
},
{
  "key": "ctrl+shift+oem_1",
  "command": "workbench.action.showCommands"
},
{
  "key": "alt+oem_2",
  "command": "editor.emmet.action.matchTag"
},
{
  "key": "ctrl+left",
  "command": "cursorWordPartLeft"
},
{
  "key": "shift+left",
  "command": "cursorWordPartLeftSelect"
},
{
  "key": "ctrl+right",
  "command": "cursorWordPartRight"
},
{
  "key": "shift+right",
  "command": "cursorWordPartRightSelect"
},

