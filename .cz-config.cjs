module.exports = {
    // commit types
    types: [
        { value: '🎉 init', name: '🎉init:     Project initialization' },
        { value: '✨ feat', name: '✨feat:     New feature' },
        { value: '🐞 fix', name: '🐞fix:      Bug fix' },
        { value: '🎨 style', name: '🎨style:    Styling changes' },
        { value: '🚧 working', name: '🚧working: Ongoing work' },
        { value: '📝 docs', name: '📝docs:     Documentation only changes' },
        { value: '🔧 chore', name: '🔧chore:    Changes to the libraries/tools/build process' },
        { value: '📐 format', name: '📐format:   Code formatting(without changes to functionaliteis)' },
        { value: '🦄 refactor', name: '🦄refactor: Changes that neither fix bugs nor add features' },
        { value: '🚀 perf', name: '🚀perf:     Performance improvements' },
        { value: '🧪 test', name: '🧪test:     Adding tests' },
        { value: '⏪ revert', name: '⏪revert:   Rollback' },
        { value: '🔨 build', name: '🔨build:    Build up' }
    ],

    scopes: [{ name: 'landing' }, { name: 'shop' }, { name: 'check out' }, { name: 'payment' }],
    // messaging steps
    messages: {
        type: 'Select the type of your commit:',
        scope: '\nDenote the SCOPE of this change (optional):',
        customScope: 'Input the scope of changes(optional):',
        subject: 'Briefly describe the changes(required):',
        body: 'Detailed desciptions(optional):',
        footer: 'Issue to be closed by this commit(optional). E.g.: #1:\n',
        confirmCommit: 'Commit with above information?(y/n/e/h)'
    },
    // length limit of subject content
    subjectLimit: 100,
    allowCustomScopes: true
};
