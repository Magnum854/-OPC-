const demands = [
  {
    id: 1,
    type: "找队友",
    title: "寻找 2 名同学共建 AI 校园活动助手",
    desc: "想把活动信息、报名提醒、日程同步和问答整合成一个轻量助手。已有基础原型，需要前端和产品同学一起推进 MVP。",
    author: "学生 / 计算机学院",
    status: "开放中",
    tags: ["Vibe Coding", "AI 应用", "校园服务"],
    comments: 12,
    likes: 34,
    time: "2 小时前",
  },
  {
    id: 2,
    type: "B端需求",
    title: "实验室设备预约与耗材登记系统优化",
    desc: "老师希望把现有表格流程改成可追踪的小系统，包含设备预约、耗材库存、使用记录和异常提醒。",
    author: "教授 / 实验室",
    status: "待认领",
    tags: ["B端需求", "数据库", "管理系统"],
    comments: 8,
    likes: 27,
    time: "5 小时前",
  },
  {
    id: 3,
    type: "技术求助",
    title: "Next.js 项目接 Supabase Auth 的权限设计怎么做",
    desc: "现在能登录，但不知道学生、管理员、企业方三种角色怎么设计表结构和中间件，想找有经验的同学看一下。",
    author: "学生 / 设计与开发",
    status: "进行中",
    tags: ["Next.js", "Supabase", "权限"],
    comments: 18,
    likes: 42,
    time: "昨天",
  },
  {
    id: 4,
    type: "作品反馈",
    title: "帮忙体验一个 AI 简历诊断工具",
    desc: "黑客松后继续迭代的项目，希望找 10 位同学试用，重点反馈结果是否可信、页面是否容易理解。",
    author: "校友 / 创业团队",
    status: "开放中",
    tags: ["作品反馈", "AI 产品", "用户测试"],
    comments: 6,
    likes: 19,
    time: "2 天前",
  },
  {
    id: 5,
    type: "找导师",
    title: "想做校园知识库 RAG，需要老师指导评估方向",
    desc: "希望围绕课程资料、社团手册和活动文档做检索增强问答，但担心数据合规和评估方法不清晰。",
    author: "学生 / AI 兴趣小组",
    status: "待导师",
    tags: ["RAG", "数据合规", "评估"],
    comments: 5,
    likes: 16,
    time: "3 天前",
  },
];

const posts = {
  "vibe-coding": {
    category: "技术文章",
    title: "Vibe Coding：让灵感直接靠近可运行的作品",
    summary: "从工具链、提问方式、最小可行产品到复盘方法，整理 OPC 的实践经验。",
    body: [
      {
        heading: "为什么 OPC 要强调 Vibe Coding",
        text: "Vibe Coding 的价值不只是更快写代码，而是让想法、验证和作品之间的距离变短。对学生来说，它降低了从需求到原型的门槛，也让跨专业团队可以围绕真实问题快速协作。",
      },
      {
        heading: "一次有效的实践流程",
        list: [
          "先描述真实用户和具体场景，而不是先决定技术栈。",
          "用最小页面或最小流程验证核心假设。",
          "把 AI 当作协作者：让它生成草稿、解释方案、检查边界，而不是替代产品判断。",
          "每次迭代都留下复盘材料，形成可被后来者复用的社区资产。",
        ],
      },
      {
        heading: "OPC 的方法论",
        text: "好的项目不是一次性冲刺出来的，而是在需求、原型、反馈和资源之间持续循环。社区会把这些过程沉淀到需求看板、项目展示和 Lab Notes 中，让更多成员能从别人的实践中继续生长。",
      },
    ],
  },
  "ai-product-7-days": {
    category: "项目复盘",
    title: "从 0 到 1：我们如何在 7 天内做出一个 AI 产品",
    summary: "一次校园黑客松项目的完整复盘，包括需求判断、分工和演示策略。",
    body: [
      {
        heading: "第一天：先判断问题是否真实",
        text: "团队没有先做功能列表，而是先访谈目标用户，确认他们在哪个环节最耗时、最容易出错，以及是否愿意使用一个新工具来解决这个问题。",
      },
      {
        heading: "中间三天：只保留能演示价值的功能",
        list: [
          "产品同学负责用户流程和演示脚本。",
          "前端同学负责核心界面和交互状态。",
          "后端同学负责数据结构、模型调用和接口稳定性。",
          "每天晚上用 30 分钟复盘：删掉不影响演示价值的功能。",
        ],
      },
      {
        heading: "最后两天：让项目被看懂",
        text: "项目展示不只是讲技术实现，更要讲清楚用户是谁、痛点是什么、方案为什么成立、下一步如何验证。OPC 后续会把类似复盘作为项目展示页的重要内容。",
      },
    ],
  },
  "prompt-engineering": {
    category: "AI 实践",
    title: "Prompt Engineering 不只是写提示词",
    summary: "把提示词工程放回产品流程：约束、评价、迭代和用户场景。",
    body: [
      {
        heading: "提示词是产品设计的一部分",
        text: "提示词不是孤立的技巧，而是产品行为的说明书。一个可靠的 AI 功能，需要明确输入边界、输出格式、失败状态和评价标准。",
      },
      {
        heading: "OPC 推荐的四步",
        list: [
          "定义任务：用户到底希望 AI 替他完成什么。",
          "约束输出：格式、语气、长度、禁止事项都要清楚。",
          "建立评价：用真实样例检查输出是否稳定。",
          "持续迭代：把失败案例纳入下一版提示词和产品逻辑。",
        ],
      },
      {
        heading: "从提示词走向系统",
        text: "当一个提示词开始承担稳定业务价值时，就应该把它产品化：接入数据、增加权限、记录日志、设计人工复核流程。这也是社区项目从 Demo 走向真实落地的关键一步。",
      },
    ],
  },
};

const feed = document.querySelector("[data-demand-feed]");
const tabs = document.querySelectorAll("[data-filter]");
const searchInput = document.querySelector("[data-board-search]");
const header = document.querySelector(".site-header");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const menuButton = document.querySelector("[data-menu-button]");
const composer = document.querySelector("[data-composer]");
const searchModal = document.querySelector("[data-search-modal]");
const postModal = document.querySelector("[data-post-modal]");
const postTitle = document.querySelector("[data-post-title]");
const postCategory = document.querySelector("[data-post-category]");
const postSummary = document.querySelector("[data-post-summary]");
const postBody = document.querySelector("[data-post-body]");

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

function openPost(postId) {
  const post = posts[postId];
  if (!post || !postModal) return;
  postTitle.textContent = post.title;
  postCategory.textContent = post.category;
  postSummary.textContent = post.summary;
  postBody.innerHTML = post.body
    .map((block) => {
      const list = block.list
        ? `<ul>${block.list.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";
      const text = block.text ? `<p>${block.text}</p>` : "";
      return `<section><h3>${block.heading}</h3>${text}${list}</section>`;
    })
    .join("");
  setDialogState(postModal, true);
}

document.querySelectorAll("[data-post-id]").forEach((article) => {
  article.addEventListener("click", () => openPost(article.dataset.postId));
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPost(article.dataset.postId);
    }
  });
});

document.querySelectorAll("[data-close-post]").forEach((button) => {
  button.addEventListener("click", () => setDialogState(postModal, false));
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
});

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

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

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
