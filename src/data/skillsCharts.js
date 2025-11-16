// Chart 1: Focus Distribution (Donut Chart)
export const focusDistributionData = [
  { group: 'SAP / Enterprise', value: 40 },
  { group: 'Java / Backend', value: 25 },
  { group: 'AI / ML', value: 25 },
  { group: 'Mainframe & Other', value: 10 },
];

export const focusDistributionOptions = {
  title: 'Current focus across domains',
  resizable: true,
  donut: {
    center: {
      label: 'Focus',
    },
  },
  legend: {
    alignment: 'center',
  },
  height: '300px',
};

// Chart 2: Proficiency by Category (Grouped Bar Chart)
export const proficiencyData = [
  { group: 'SAP ABAP', key: 'Proficiency', value: 5 },
  { group: 'Java / Spring', key: 'Proficiency', value: 4 },
  { group: 'Python / ML', key: 'Proficiency', value: 4 },
  { group: 'Databases (SQL/PLSQL)', key: 'Proficiency', value: 4 },
  { group: 'Cloud & DevOps', key: 'Proficiency', value: 3 },
];

export const proficiencyOptions = {
  title: 'Relative proficiency by domain (1–5)',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Level',
    },
    bottom: {
      mapsTo: 'group',
      scaleType: 'labels',
    },
  },
  height: '300px',
};
