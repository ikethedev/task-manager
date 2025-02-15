function createListItem(imgSrc, text, isActive = false) {
    // Create the <li> element
    const listItem = document.createElement('li');
    listItem.className = `sidemenu__list-item ${isActive ? 'active' : ''}`;
  
    // Create the <img> element
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = `${text} Icon`;
  
    // Create the <p> element
    const textElement = document.createElement('p');
    textElement.textContent = text;
  
    // Append <img> and <p> to the <li>
    listItem.appendChild(imgElement);
    listItem.appendChild(textElement);
  
    // Return the completed list item
    return listItem;
  }
  

  export { createListItem }