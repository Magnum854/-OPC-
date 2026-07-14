const demands = [
  {
    id: 1,
    type: "找队友",
    title: "寻找 2 名同学共建 AI 校园活动助手",
    desc: "想把活动信息、报名提醒、日程同步和问答整合成一个轻量助手。已有基础原型，需要前端和产品同学一起推进 MVP。",
    author: "需求示例 / 计算机方向",
    status: "内测展示",
    tags: ["Vibe Coding", "AI 应用", "校园服务"],
    comments: 0,
    likes: 0,
    time: "功能示例",
  },
  {
    id: 2,
    type: "B端需求",
    title: "实验室设备预约与耗材登记系统优化",
    desc: "老师希望把现有表格流程改成可追踪的小系统，包含设备预约、耗材库存、使用记录和异常提醒。",
    author: "需求示例 / 实验室场景",
    status: "内测展示",
    tags: ["B端需求", "数据库", "管理系统"],
    comments: 0,
    likes: 0,
    time: "功能示例",
  },
  {
    id: 3,
    type: "技术求助",
    title: "Next.js 项目接 Supabase Auth 的权限设计怎么做",
    desc: "现在能登录，但不知道学生、管理员、企业方三种角色怎么设计表结构和中间件，想找有经验的同学看一下。",
    author: "需求示例 / 设计与开发",
    status: "内测展示",
    tags: ["Next.js", "Supabase", "权限"],
    comments: 0,
    likes: 0,
    time: "功能示例",
  },
  {
    id: 4,
    type: "作品反馈",
    title: "帮忙体验一个 AI 简历诊断工具",
    desc: "黑客松后继续迭代的项目，希望找 10 位同学试用，重点反馈结果是否可信、页面是否容易理解。",
    author: "需求示例 / 产品反馈",
    status: "内测展示",
    tags: ["作品反馈", "AI 产品", "用户测试"],
    comments: 0,
    likes: 0,
    time: "功能示例",
  },
  {
    id: 5,
    type: "找导师",
    title: "想做校园知识库 RAG，需要老师指导评估方向",
    desc: "希望围绕课程资料、社团手册和活动文档做检索增强问答，但担心数据合规和评估方法不清晰。",
    author: "需求示例 / AI 方向",
    status: "内测展示",
    tags: ["RAG", "数据合规", "评估"],
    comments: 0,
    likes: 0,
    time: "功能示例",
  },
];

const feed = document.querySelector("[data-demand-feed]");
const tabs = document.querySelectorAll("[data-filter]");
const searchInput = document.querySelector("[data-board-search]");
const header = document.querySelector(".site-header");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const menuButton = document.querySelector("[data-menu-button]");
const composer = document.querySelector("[data-composer]");
const searchModal = document.querySelector("[data-search-modal]");
const globalSearchForm = document.querySelector("[data-global-search-form]");
const globalSearchInput = document.querySelector("[data-global-search]");
const composerForm = document.querySelector("[data-composer-form]");
const composerStatus = document.querySelector("[data-composer-status]");

let activeFilter = "全部";
let activeSearch = "";
const liked = new Set();

function iconChevronUp() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 15 6-6 6 6"></path>
    </svg>
  `;
}

function renderDemands() {
  if (!feed) return;

  const normalizedSearch = activeSearch.trim().toLowerCase();
  const visible = demands.filter((item) => {
    const filterMatch = activeFilter === "全部" || item.type === activeFilter;
    const searchTarget = `${item.title} ${item.desc} ${item.author} ${item.tags.join(" ")}`.toLowerCase();
    return filterMatch && (!normalizedSearch || searchTarget.includes(normalizedSearch));
  });

  if (!visible.length) {
    feed.innerHTML = `
      <article class="demand-card">
        <div class="vote-box"></div>
        <div>
          <h3>暂时没有匹配的需求</h3>
          <p>换一个关键词，或发布一个新的真实需求。</p>
        </div>
      </article>
    `;
    return;
  }

  feed.innerHTML = visible
    .map((item) => {
      const isLiked = liked.has(item.id);
      return `
        <article class="demand-card">
          <div class="vote-box">
            <button class="${isLiked ? "liked" : ""}" type="button" aria-label="点赞 ${item.title}" data-like="${item.id}">
              ${iconChevronUp()}
            </button>
            <span>${item.likes + (isLiked ? 1 : 0)}</span>
          </div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="demand-meta">
              <span>${item.type}</span>
              <span>${item.author}</span>
              <span>${item.status}</span>
              <span>${item.comments} 条评论</span>
              <span>${item.time}</span>
            </div>
            <div class="demand-tags">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

tabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    tabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    renderDemands();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    activeSearch = event.target.value;
    renderDemands();
  });
}

if (feed) {
  feed.addEventListener("click", (event) => {
    const button = event.target.closest("[data-like]");
    if (!button) return;
    const id = Number(button.dataset.like);
    if (liked.has(id)) {
      liked.delete(id);
    } else {
      liked.add(id);
    }
    renderDemands();
  });
}

function setDialogState(dialog, open) {
  if (!dialog) return;
  if (open && !dialog.open) {
    dialog.showModal();
    document.body.classList.add("modal-open");
  }
  if (!open && dialog.open) {
    dialog.close();
    document.body.classList.remove("modal-open");
  }
}

document.querySelectorAll("[data-open-composer]").forEach((button) => {
  button.addEventListener("click", () => setDialogState(composer, true));
});

document.querySelectorAll("[data-close-composer]").forEach((button) => {
  button.addEventListener("click", () => setDialogState(composer, false));
});

document.querySelectorAll("[data-open-search]").forEach((button) => {
  button.addEventListener("click", () => setDialogState(searchModal, true));
});

document.querySelectorAll("[data-close-search]").forEach((button) => {
  button.addEventListener("click", () => setDialogState(searchModal, false));
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
});

if (globalSearchForm && globalSearchInput) {
  globalSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    activeSearch = globalSearchInput.value.trim();
    if (searchInput) searchInput.value = activeSearch;
    renderDemands();
    setDialogState(searchModal, false);
    window.location.hash = "board";
  });
}

if (composerForm && composerStatus) {
  composerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    composerStatus.hidden = false;
    composerStatus.textContent = "需求提交功能仍在内测，本次内容尚未发送。正式渠道开放后会在官网更新。";
  });
}

if (menuButton && mobilePanel) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("open");
    mobilePanel.setAttribute("aria-hidden", String(!isOpen));
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
      mobilePanel.setAttribute("aria-hidden", "true");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length) {
  document.documentElement.classList.add("reveal-ready");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function updateHeader() {
  if (!header) return;
  header.dataset.elevated = String(window.scrollY > 18);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Scroll spy — highlight current section in nav
(function initScrollSpy() {
  const SECTION_IDS = ["home", "about", "board", "projects", "posts", "events", "join"];
  const sectionRatios = new Map(SECTION_IDS.map(function (id) { return [id, 0]; }));
  var currentActiveId = null;

  function getNavLinks() {
    return document.querySelectorAll(".desktop-nav a[href^='#'], .mobile-panel a[href^='#']");
  }

  function findActiveSectionId() {
    var bestId = null;
    var bestRatio = 0;
    SECTION_IDS.forEach(function (id) {
      var ratio = sectionRatios.get(id) || 0;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestId = id;
      }
    });
    return bestId;
  }

  function updateActiveLink() {
    var newId = findActiveSectionId();
    if (newId === currentActiveId || !newId) return;
    currentActiveId = newId;
    var targetHref = "#" + newId;
    getNavLinks().forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === targetHref);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    var changed = false;
    entries.forEach(function (entry) {
      var id = entry.target.id;
      if (!SECTION_IDS.includes(id)) return;
      var ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
      if (sectionRatios.get(id) !== ratio) {
        sectionRatios.set(id, ratio);
        changed = true;
      }
    });
    if (changed) updateActiveLink();
  }, {
    rootMargin: "-80px 0px -50% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  SECTION_IDS.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  updateActiveLink();
})();

const canvas = document.querySelector(".network-canvas");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let points = [];
  let mouse = { x: 0, y: 0, active: false };

  function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.max(34, Math.floor(width / 34)) }, (_, index) => ({
      x: (index * 97) % width,
      y: (index * 151) % height,
      vx: ((index % 5) - 2) * 0.08,
      vy: (((index + 2) % 5) - 2) * 0.08,
      r: index % 7 === 0 ? 2.2 : 1.4,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;

      for (let i = index + 1; i < points.length; i += 1) {
        const other = points[i];
        const dx = point.x - other.x;
        const dy = point.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 150) {
          ctx.strokeStyle = `rgba(255,255,255,${0.11 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      if (mouse.active) {
        const dx = point.x - mouse.x;
        const dy = point.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 210) {
          ctx.strokeStyle = `rgba(184,255,90,${0.18 * (1 - distance / 210)})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = index % 9 === 0 ? "rgba(184,255,90,0.9)" : "rgba(255,255,255,0.62)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    };
  });

  canvas.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  draw();
}

renderDemands();
