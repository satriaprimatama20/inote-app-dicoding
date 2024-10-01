Note - Your Personal Book Note Application
iNote is a versatile and intuitive book note-taking application designed to help users easily create, manage, and organize notes related to their reading. Whether you're keeping track of book summaries, key insights, or to-do lists, iNote provides a seamless experience for managing all your important notes in one place.

Key Features:
Dynamic Note List: iNote utilizes modern web technologies like Custom Elements to dynamically display a list of notes. Each note is rendered as a separate custom component (<note-item>) and displayed in a grid format using Shadow DOM, providing a clean, organized layout.

Shadow DOM for Encapsulation: iNote leverages Shadow DOM to isolate styles for different components like NoteList and NoteItem. This ensures that each component's styling doesn't interfere with the rest of the application, providing a modular and maintainable architecture.

Customizable Note Appearance: Users can easily change note attributes such as title, content, and appearance, with options like customizable fonts and colors. Through interactive elements, the app provides a smooth experience for creating visually distinct notes.

Search and Filter Functionality: With a built-in search bar component, users can filter through their notes based on keywords or topics, enabling quick access to the notes they need at any time. The search results are dynamically updated as the user types.

Efficient Note Management: Users can archive or delete notes seamlessly. Archived notes are stored separately, ensuring that the active note list remains clutter-free while still providing access to archived items when needed.

Data Storage with External Files: iNote supports loading and displaying note data from external JavaScript files (like notes.js). This allows for easy integration of saved data or pre-loaded notes, making it ideal for both temporary and long-term note storage.

Responsive Design: The layout of iNote adjusts to different screen sizes, ensuring a smooth experience whether you're using the app on a desktop, tablet, or mobile device.

Technical Features:
JavaScript Modules: iNote utilizes modern JavaScript practices, including ES6 modules for organizing code, making it easier to maintain and extend.

Reusable Components: Through the use of custom web components, each part of the application, such as the note list, individual notes, and the search bar, can be reused and styled independently without conflicts.

Utils Library: A utility class (MyUtils) is included to handle repetitive tasks such as hiding, showing, and clearing elements, as well as validating input data. This ensures that the application runs smoothly and efficiently.

Sample Use Case:
Imagine you're reading a new book and want to capture key insights or ideas. With iNote, you can:

Add a New Note: Create a new note with the title of the book and add your thoughts or important takeaways.
Search Existing Notes: Use the search bar to filter through your notes by title or content, helping you quickly find information from previous books you've read.
Archive Completed Notes: Once you've finished reading, simply archive the note to keep your workspace clean without losing the content.
Customize: Adjust the appearance of your notes for better readability and organization.
With iNote, keeping track of your book notes has never been easier!
