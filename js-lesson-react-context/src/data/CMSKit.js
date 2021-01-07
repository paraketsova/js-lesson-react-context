export const CMSKit = {
  age: {
    name: "age",
    heading: "Age",
    button: {
      label: "Move along to interest page",
      to: "/interest"
    },
    alternatives: [
      {value: "a", label: "Younger than 25 🐣"},
      {value: "b", label: "Between 25 and 50"},
      {value: "c", label: "Older than 50"},
    ]
  },
  interest: {
   name: "interest",
   heading: "Interest",
   button: {
     label: "Lets move on to your relationship",
     to: "/relationship"
   },
   alternatives: [
    {value: "a", label: "Fashion"},
    {value: "b", label: "Tech"},
    {value: "c", label: "Craft"},
  ]
 },
 relationship: {
   name: "relationship",
   heading: "Relationship",
   button: {
     label: "Lets see your result",
     to: "/result"
   },
   alternatives: [
    {value: "a", label: "Parent"},
    {value: "b", label: "Sibling"},
    {value: "c", label: "Other"},
   ]
 } 
}
