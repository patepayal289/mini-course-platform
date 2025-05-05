const courses = [
    {
      id: 'html-basics',
      title: 'HTML Basics',
      description: 'Learn the structure of web pages using HTML.',
      image: 'https://via.placeholder.com/300x200?text=HTML+Course',
      lessons: [
        {
          title: 'HTML Introduction',
          description: 'Understand what HTML is and why it is important.',
          resources: ['https://developer.mozilla.org/en-US/docs/Web/HTML'],
          youtubeLink: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
        },
        {
          title: 'Common HTML Tags',
          description: 'Explore essential HTML tags like headings, paragraphs, and lists.',
          resources: ['https://www.w3schools.com/tags/'],
          youtubeLink: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
        },
      ],
    },
    {
      id: 'css-fundamentals',
      title: 'CSS Fundamentals',
      description: 'Style your websites beautifully using CSS.',
      image: 'https://via.placeholder.com/300x200?text=CSS+Course',
      lessons: [
        {
          title: 'Selectors and Properties',
          description: 'Learn how to select and style HTML elements.',
          resources: ['https://developer.mozilla.org/en-US/docs/Web/CSS'],
          youtubeLink: 'https://www.youtube.com/watch?v=1PnVor36_40',
        },
        {
          title: 'Box Model',
          description: 'Understand margin, padding, and borders in CSS.',
          resources: ['https://css-tricks.com/the-css-box-model/'],
          youtubeLink: 'https://www.youtube.com/watch?v=rIO5326FgPE',
        },
      ],
    },
    {
      id: 'js-essentials',
      title: 'JavaScript Essentials',
      description: 'Make your pages interactive using JavaScript.',
      image: 'https://via.placeholder.com/300x200?text=JavaScript+Course',
      lessons: [
        {
          title: 'Variables and Data Types',
          description: 'Learn how to store and use data in JavaScript.',
          resources: ['https://www.w3schools.com/js/js_datatypes.asp'],
          youtubeLink: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        },
        {
          title: 'Functions and Events',
          description: 'Handle user actions with JavaScript functions.',
          resources: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions'],
          youtubeLink: 'https://www.youtube.com/watch?v=8dWL3wF_OMw',
        },
      ],
    },
    {
      id: 'bootstrap-basics',
      title: 'Bootstrap Basics',
      description: 'Build responsive layouts quickly with Bootstrap.',
      image: 'https://via.placeholder.com/300x200?text=Bootstrap+Course',
      lessons: [
        {
          title: 'Grid System',
          description: 'Learn the core layout system in Bootstrap.',
          resources: ['https://getbootstrap.com/docs/5.3/layout/grid/'],
          youtubeLink: 'https://www.youtube.com/watch?v=5GcQtLDGXy8',
        },
        {
          title: 'Components',
          description: 'Use prebuilt UI components like buttons and cards.',
          resources: ['https://getbootstrap.com/docs/5.3/components/buttons/'],
          youtubeLink: 'https://www.youtube.com/watch?v=-qfEOE4vtxE',
        },
      ],
    },
    {
      id: 'react-intro',
      title: 'Intro to React',
      description: 'Start building dynamic interfaces with React.js.',
      image: 'https://via.placeholder.com/300x200?text=React+Course',
      lessons: [
        {
          title: 'JSX and Components',
          description: 'Understand how to write React components.',
          resources: ['https://reactjs.org/docs/components-and-props.html'],
          youtubeLink: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        },
        {
          title: 'State and Props',
          description: 'Learn how to manage data in components.',
          resources: ['https://reactjs.org/docs/state-and-lifecycle.html'],
          youtubeLink: 'https://www.youtube.com/watch?v=TL6o1vEHMtA',
        },
      ],
    },
  ];
  
  export default courses;
  