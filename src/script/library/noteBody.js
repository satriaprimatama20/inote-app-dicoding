class Bookmarks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
          .bookmark-icon {
              font-size: 24px;
              cursor: pointer;
          }
          .fill-bookmark {
              color: gold;
          }
      </style>
      <i class="bi bi-bookmarks">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
              <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
          </svg>
      </i>
      <i class="bi bi-bookmarks-fill">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z"/>
              <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z"/>
          </svg>
      </i>
    `;
  }
}

customElements.define("book-marks", Bookmarks);

class NoteBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
      .note-list-item {
      
       
      }
      .card {
        font-family: "Inter", sans-serif;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
        overflow: hidden;
      }
      .note-body {
        background: var(--bg-color-note-orange);
        padding: 20px;
        margin: 10px;
        border-radius: 7px;
        font-size: 14px;
        overflow: initial;
        /* text-overflow: ellipsis; */
        line-height: 1.5;
        gap: 10px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        min-width: 250px;
        max-height: 250px; 
        display: grid;
        grid-template-columns: 85% 15%;
        transition: transform 0.3s;
      }
      
      .note-body:hover {
        transform: scale(1.05);
      }
      
      @media (min-width: 600px) {
        .note-list-item {
          grid-template-columns: repeat(1, 1fr);
        }
      
        .note-body {
          max-width: 45%;
        }
      }
    
    .note-body>i.bi-bookmarks {
      color: #070f2b ;
      cursor: pointer;
      transition: all 0.3s linear;
      width: 1.5rem;
      font-size: 1.8rem;
    }
    
    .note-body>i.bi-bookmarks-fill {
      cursor: pointer;
      transition: var(--transition);  
      font-size: 1.6rem;
    }
    
    .note-title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 12px;
    }
    
    .note-title>h2 {
      font-size: 1rem;
    }
    
    .note-body-tool {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 16px;
      cursor: pointer;
      font-size: 1.5em;
    }
    
    .note-body>article {
      font-size: 14px;
      font-weight: 300;
    }
    
    i.fi-sr-file-edit {
      color: #070f2b;
    
    }
    
    i.fi-sr-file-edit:hover {
      color: var(--hover-color);
    }
    
    i.fi-sr-file-edit:active {
      color: var(--active-color);
    }
    
    i.fi-sr-trash {
      color: var(--bg-dark-mode);
    }
    
    i.fi-sr-trash:hover {
      color: var(--hover-color);
    }
    
    i.fi-sr-trash:active {
      color: var(--active-color);
    }
    
    i.fi-rr-inbox-full {
      color: var(--bg-dark-mode);
    }
    
    i.fi-rr-inbox-full:hover {
      color: var(--hover-color);
    }
    
    i.fi-rr-inbox-full:active {
      color: var(--active-color);
    }
          }
      </style>
      <div id="noteListItem" class="note-list-item">
      <div id="noteBody" class="card note-body">
      <div class="note-title">
          <h3>10 Hal yang perlu kamu ketahui tentang JavaScript</h3>
          <div class="note-date">12/12/2022</div>
          <div class="note-body-tool">
              <i class="fi fi-sr-file-edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg></i>
              <i class="fi fi-sr-trash">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg></i>
          </div>
      </div>
      <book-marks></book-marks>
      </div>
      </div>
      
    `;
  }
}

customElements.define("note-body", NoteBody);
