function openGitlabPopup() {
    const gitlabPopup = document.getElementById('gitlab-popup');
    const gitlabPopupOptions = document.querySelector('.popup-content ul');
  

    while (gitlabPopupOptions.firstChild) {
        gitlabPopupOptions.removeChild(gitlabPopupOptions.firstChild);
    }
  

    const options = [
      { name: 'فناوری اطلاعات', link: 'https://gitlab.samimgroup.com/hyperyek/internal-tasks/it-tasks' },
      { name: 'منابع انسانی', link: 'https://gitlab.samimgroup.com/hyperyek/internal-tasks/hr-issues' },
      { name: 'حقوق و دستمزد', link: 'https://gitlab.samimgroup.com/hyperyek/internal-tasks/salary-issues' },
      { name: 'اداری', link: 'https://gitlab.samimgroup.com/hyperyek/internal-tasks/administrative-tasks' },
    ];
  
    options.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className= "popup-links"
      a.textContent = item.name;
      a.href = item.link;
      a.target = '_blank';
      li.appendChild(a);
      popupOptions.appendChild(li);
    });
  

    gitlabPopup.style.display = 'block';
  }
  

  const openGitlabPopupElement = document.getElementById('open-gitlab-popup');
  openGitlabPopupElement.addEventListener('click', function () {
    openGitlabPopup();
  });
  

  const closeGitlabPopupButton = document.getElementById('close-gitlab-popup');
  closeGitlabPopupButton.addEventListener('click', function () {
    const popup = document.getElementById('gitlab-popup');
    popup.style.display = 'none';
  });
  


  function openSnappPopup() {
    const snappPopup = document.getElementById('snapp-popup');
    
    snappPopup.style.display = 'block';
  }

  const openSnappPopupElement = document.getElementById('open-snapp-popup');
  openSnappPopupElement.addEventListener('click', function () {
    openSnappPopup();
  });
  

  const closeSnappPopupButton = document.getElementById('close-snapp-popup');
  closeSnappPopupButton.addEventListener('click', function () {
    const popup = document.getElementById('snapp-popup');
    popup.style.display = 'none';
  });





  