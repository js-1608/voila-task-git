
function handleFileUpload() {
    const fileInput = document.getElementById('file-input');
    const fileInfo = document.getElementById('file-info');
    const errorMessage = document.getElementById('error-message');

    const file = fileInput.files[0];

    if (file) {
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const maxSizeMB = 2;
  
      if (allowedExtensions.includes('.' + fileExtension)) {
        if (file.size <= maxSizeMB * 1024 * 1024) { // Check file size
          errorMessage.innerHTML = ''; // Clear previous error message
  
          fileInfo.innerHTML = `
            <div class="info_details">
              <p class="file_name">${file.name}</p>
              <p class="file_size">${(file.size / (1024 ** 2)).toFixed(2)} MB</p>
            </div>
          `;
  
          displayFileIcon(fileExtension);
          displayRemoveIcon();
        } else {
          resetFileInput();
          errorMessage.innerHTML = `Error: File size exceeds the limit of ${maxSizeMB} MB.`;
        }
      } else {
        resetFileInput();
        errorMessage.innerHTML = 'Error: Please upload a valid PDF, DOC, or DOCX file.';
      }
    } else {
      resetFileInput();
      errorMessage.innerHTML = 'Error: No file selected.';
    }
  }

  function displayFileIcon(fileExtension) {
    const fileInfo = document.getElementById('file-info');
    const icon = document.createElement('img');
    icon.className = 'file-icon';

    switch (fileExtension) {
      case 'pdf':
        icon.src = './mega_menu/img/pdf_icon.webp'; // Replace with the actual path to your PDF icon image
        break;
      case 'doc':
      case 'docx':
        icon.src = './mega_menu/img/doc_icon.webp'; // Replace with the actual path to your DOC/DOCX icon image
        break;
      default:
        break;
    }

    fileInfo.appendChild(icon);
  }

  function displayRemoveIcon() {
    const fileInfo = document.getElementById('file-info');
    const removeIcon = document.createElement('span');
    removeIcon.className = 'remove-icon';
    removeIcon.innerHTML = '<img src="./mega_menu/img/cross_icon.webp" alt="Remove" class="cross-icon">';
    removeIcon.onclick = resetFileInput;

    fileInfo.appendChild(removeIcon);
  }

  function resetFileInput() {
    const fileInput = document.getElementById('file-input');
    const fileInfo = document.getElementById('file-info');
    const errorMessage = document.getElementById('error-message');

    fileInput.value = null; 
    fileInfo.innerHTML = ''; 
    errorMessage.innerHTML = ''; 
  }

  

  // for image uploader 
  $(document).ready(function() {
    $('#imageInput').change(function() {
      uploadImage();
    });
  
    $('#hideDetails').click(function() {
      $('#imageDetails').hide();
    });
  });
  
  function uploadImage() {
    var input = $('#imageInput')[0];
    var file = input.files[0];
    var errorElement = $('#imageError');
    var detailsElement = $('#imageDetails');
  
    // Reset error message
    errorElement.text('');
  
    // Check if a file is selected
    if (!file) {
      errorElement.text('Please select an image.');
      detailsElement.hide();
      return;
    }
  
    // Check file type
    var allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add more types if needed
    if (!allowedTypes.includes(file.type)) {
      errorElement.text('Only image files (JPEG, PNG, GIF) are allowed.');
      detailsElement.hide();
      return;
    }
  
    // Check file size (in MB)
    var maxSize = 2; // Maximum allowed size in megabytes
    if (file.size > maxSize * 1024 * 1024) {
      errorElement.text('File size exceeds the maximum limit of ' + maxSize + ' MB.');
      detailsElement.hide();
      return;
    }
  
    // Display image details
    $('#imageName').text(file.name);
    $('#imageSize').text((file.size / (1024 * 1024)).toFixed(2) + ' MB');
  
    // Show image details
    detailsElement.show();
  
    // Update default image source
    $('#defaultImage').attr('src', URL.createObjectURL(file));
  }
  
  setTimeout(function() {
    $("imageError").hide(500);
    
}, 2000);


// side bar aniamtion of every page
    var divElement = document.getElementById('sidebar_line_extra_mobile');

    var isHidden = true;

    function toggleVisibility() {
        if (isHidden) {
            divElement.style.display = 'block';
        } else {
            divElement.style.display = 'none';
        }
        isHidden = !isHidden;
    }

    toggleVisibility();

    setInterval(toggleVisibility, 5000);
