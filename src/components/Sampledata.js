const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Complete the data analysis report by end of day.",
      date: "08/08/2024",
      starred: false,
      color: '#ffdab9', // Light pink
    },
    {
      id: nanoid(),
      text: "Review the pull request for the new feature branch.",
      date: "08/08/2024",
      starred: false,
      color: '#add8e6', // Light coral
    },
    {
      id: nanoid(),
      text: "Attend team meeting to discuss project updates.",
      date: "08/09/2024",
      starred: false,
      color: '#98fb98', // Light peach
    },
    {
      id: nanoid(),
      text: "Prepare presentation slides for the upcoming conference.",
      date: "08/10/2024",
      starred: false,
      color: '#fffacd', // Light green
    },
    {
      id: nanoid(),
      text: "Schedule a code review session with the junior developers.",
      date: "08/11/2024",
      starred: false,
      color: '#ffb6c1', // Light blue
    }
  ]);