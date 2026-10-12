const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = contactForm.querySelector(".form-message");
  const name = contactForm.elements.name.value.trim();
  message.textContent = `${name}님, 메시지를 확인했습니다. 곧 답변드릴게요!`;
  contactForm.reset();
});

const projectDetails = {
  lumio: {
    title: "Lumio",
    description: "업무 데이터를 한눈에 파악하고 팀의 다음 행동을 정하도록 돕는 대시보드 프로젝트입니다.",
    role: "사용자 인터뷰, UX 흐름 설계, 대시보드 UI 디자인",
    technologies: "Figma, FigJam, 프로토타이핑",
    outcomes: "예시 사용성 테스트에서 핵심 정보 탐색 시간이 줄어든 것으로 설정한 프로젝트입니다."
  },
  "ondo-studio": {
    title: "Ondo Studio",
    description: "일상에서 오래 쓰고 싶은 물건을 소개하는 라이프스타일 브랜드 경험 프로젝트입니다.",
    role: "브랜드 방향성 정리, 비주얼 아이덴티티, 온라인 스토어 디자인",
    technologies: "Figma, Illustrator, 반응형 웹 디자인",
    outcomes: "예시 출시 캠페인에서 브랜드 페이지 방문과 상품 관심이 높아진 것으로 설정한 프로젝트입니다."
  }
};

const projectModal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("[data-project-description]");
const modalRole = document.querySelector("[data-project-role]");
const modalTechnologies = document.querySelector("[data-project-technologies]");
const modalOutcomes = document.querySelector("[data-project-outcomes]");
const modalCloseButton = document.querySelector(".modal-close");
const projectCards = document.querySelectorAll(".project-card");

// 프로젝트 정보를 모달에 채우고 키보드 포커스와 함께 엽니다.
function openProjectDetails(projectId) {
  const project = projectDetails[projectId];

  if (!project) {
    console.error(`프로젝트 정보를 찾을 수 없습니다: ${projectId}`);
    return;
  }

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalRole.textContent = project.role;
  modalTechnologies.textContent = project.technologies;
  modalOutcomes.textContent = project.outcomes;
  projectModal.showModal();
}

// 닫기 버튼과 모달 바깥 영역에서 공통으로 사용합니다.
function closeProjectDetails() {
  projectModal.close();
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    openProjectDetails(card.dataset.project);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectDetails(card.dataset.project);
    }
  });
});

modalCloseButton.addEventListener("click", closeProjectDetails);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal.open) {
    event.preventDefault();
    closeProjectDetails();
  }
});

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectDetails();
  }
});

const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  header.classList.toggle("is-scrolled", currentScrollY > 20);
  header.classList.toggle("is-hidden", currentScrollY > lastScrollY && currentScrollY > 120);
  lastScrollY = currentScrollY;
});
