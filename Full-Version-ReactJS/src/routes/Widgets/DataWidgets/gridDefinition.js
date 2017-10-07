export const summaries = [
    { key: 'summary-capacity', lg: 3, md: 3, maxH: 1 },
    { key: 'summary-revenue', lg: 3, md: 3, maxH: 1 },
    { key: 'summary-errors', lg: 3, md: 3, maxH: 1 },
    { key: 'summary-alerts', lg: 3, md: 3, maxH: 1 }
];

export const thinListWidgets = [
    { key: 'notifiactions', lg: 4, maxH: 1 },
    { key: 'emails', lg: 4, maxH: 1 },
    { key: 'timeline-1', lg: 4, maxH: 1 },

    { key: 'tasks', lg: 4, maxH: 1 },
    { key: 'reminders', lg: 4, maxH: 1 },
    { key: 'comments', lg: 4, maxH: 1 },

    { key: 'projects', lg: 4, maxH: 1 },
    { key: 'users', lg: 4, maxH: 1 },
    { key: 'chat', lg: 4, maxH: 1 }
];

export const largeListWidgets = [
    { key: 'comments-2', lg: 6, maxH: 1},
    { key: 'attachments', lg: 6, maxH: 1},

    { key: 'timeline-2', lg: 6, maxH: 1},
    { key: 'timeline-3', lg: 6, maxH: 1}
];

const gridDefinition = [].concat(summaries, thinListWidgets, largeListWidgets);

export default gridDefinition;
