// ==================== 作品数据 ====================
const worksData = [
    {
        id: 'project-1',
        title: 'AI视频制作与导演剪辑',
        category: 'AI视频制作',
        date: '2025',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80'
        ],
        intro: '运用AI工具进行视频制作与导演剪辑，包括AI配音、AI生成画面、AI音乐等，结合PR剪辑调色与AE特效合成，打造完整的AI视频作品。负责从创意策划到成片交付的全流程工作。',
        philosophy: '善用AI工具提升创作效率，将技术与创意完美结合，通过后期制作精雕细琢，打造高质量的AI视频作品。',
        tech: ['AI配音', 'AI生成画面', 'AI音乐', '导演剪辑', 'PR剪辑', 'AE特效'],
        completion: '2025年1月 - 至今'
    },
    {
        id: 'project-2',
        title: '后期剪辑助手工作',
        category: '剪辑调色',
        date: '2025',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
        ],
        intro: '在湖北文皓教育咨询有限公司担任后期剪辑助手，负责素材管理、基础剪辑执行、PR剪辑调色、项目协同与成片交付。参与多个项目的后期制作流程。',
        philosophy: '注重流程规范与质量把控，通过专业的剪辑调色技术确保每一个项目都达到高标准。',
        tech: ['PR剪辑', '素材管理', '调色', '项目协同'],
        completion: '2025年10月 - 2025年12月'
    },
    {
        id: 'project-3',
        title: '视频特效制作项目',
        category: '视频特效',
        date: '2023',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80'
        ],
        intro: '负责视频特效设计与合成，运用AE实现动态跟踪、粒子爆破、抠像合成等效果，搭配PR完成剪辑调色。将AI生成画面与传统后期特效相结合，打造独特的视觉效果。',
        philosophy: '通过创意特效提升视频表现力，让画面更具视觉冲击力，结合AI技术拓展创作边界。',
        tech: ['AE特效', 'PR剪辑', '动态跟踪', '粒子特效', 'AI合成'],
        completion: '2023年9月 - 2023年12月'
    },
    {
        id: 'project-4',
        title: 'AI配音与产品设计图',
        category: 'AI应用',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80'
        ],
        intro: '使用index tts2制作AI配音，lovat生成产品设计图，结合PR剪辑调色与AE特效，通过不同剪辑软件将产品设计图制作为完整宣传片。实现AI生成内容与后期制作的完美融合。',
        philosophy: '善用AI工具提升创作效率，结合专业后期制作技术，将技术与创意完美结合。',
        tech: ['index tts2', 'lovat', 'suno', 'AI音乐', 'PR剪辑', 'AE特效'],
        completion: '2024年1月 - 2024年3月'
    },
    {
        id: 'project-5',
        title: '现代公寓三维场景建模',
        category: '3D建模',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80'
        ],
        intro: '独立完成现代公寓全场景建模，涵盖空间布局、家具模型搭建、材质贴图绘制及灯光渲染。严格遵循课程设计规范，作品获评优秀作业。',
        philosophy: '注重细节与真实感，通过精确的建模和材质处理，打造逼真的三维场景。',
        tech: ['3dmax', '材质贴图', '灯光渲染'],
        completion: '2024年3月 - 2024年6月'
    },
    {
        id: 'project-6',
        title: '三维场景渲染作品',
        category: '3D渲染',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80'
        ],
        intro: '运用3dmax完成三维场景的灯光渲染与后期处理，打造具有氛围感的空间效果。',
        philosophy: '光影是三维场景的灵魂，通过精心的灯光设计营造空间氛围。',
        tech: ['3dmax', '灯光设计', '后期处理'],
        completion: '2024年4月 - 2024年5月'
    }
];

// ==================== 性能优化配置 ====================
const PERFORMANCE_CONFIG = {
    lazyLoadThreshold: 100, // 预加载距离
    animationDuration: 300, // 动画时长
    debounceDelay: 100, // 防抖延迟
    maxImageWidth: 1200, // 最大图片宽度
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 添加加载状态
    document.body.classList.add('loading');

    initPage();
    initEventListeners();
    initScrollAnimations();
    initGSAPAnimations();

    // 页面完全加载后移除加载状态
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        }, 100);
    });
});

// 初始化页面
function initPage() {
    renderWorksGrid();
}

// ==================== 作品集功能 ====================
function renderWorksGrid() {
    const grid = document.getElementById('worksGrid');
    if (!grid) return;

    grid.innerHTML = '';

    worksData.forEach((work) => {
        const card = document.createElement('div');
        card.className = 'work-card';
        card.dataset.workId = work.id;
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `${work.title} - ${work.category}`);
        card.setAttribute('tabindex', '0');

        // 构建图片展示栏HTML
        let imagesHtml = '';
        if (work.images && work.images.length > 0) {
            imagesHtml = `
                <div class="work-card-gallery" role="region" aria-label="作品图片集">
                    ${work.images.map((img, imgIndex) => `
                        <div class="gallery-item"
                             style="background-image: url('${img}')"
                             role="img"
                             aria-label="作品图片 ${imgIndex + 1}"
                             tabindex="0"></div>
                    `).join('')}
                </div>
            `;
        }

        // 使用占位符和懒加载
        card.innerHTML = `
            <div class="work-card-image has-image"
                 data-src="${work.image}"
                 style="background-color: var(--color-gray-200);"
                 role="img"
                 aria-label="${work.title} 封面图片"></div>
            <div class="work-card-content">
                <div class="work-card-category">${work.category}</div>
                <h3 class="work-card-title">${work.title}</h3>
                <p class="work-card-year">${work.date}</p>
            </div>
            ${imagesHtml}
            <div class="work-card-expand" role="button" aria-expanded="false" aria-label="展开图片集">
                <span class="expand-icon">+</span>
                <span class="expand-text">查看图片</span>
            </div>
        `;

        // 键盘导航支持
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWorkModal(work.id);
            }
        });

        // 点击事件 - 打开模态框查看作品详情
        card.addEventListener('click', function(e) {
            // 如果点击的是展开按钮，不打开模态框
            if (e.target.closest('.work-card-expand')) {
                return;
            }

            createRippleEffect(card, e);
            openWorkModal(work.id);
        });

        // 展开按钮点击事件 - 切换图片展示栏
        const expandBtn = card.querySelector('.work-card-expand');
        if (expandBtn) {
            expandBtn.addEventListener('click', function(e) {
                e.stopPropagation();

                const gallery = card.querySelector('.work-card-gallery');
                if (gallery) {
                    const isExpanded = gallery.classList.contains('active');
                    gallery.classList.toggle('active');
                    expandBtn.setAttribute('aria-expanded', !isExpanded);

                    if (isExpanded) {
                        expandBtn.querySelector('.expand-text').textContent = '查看图片';
                        expandBtn.querySelector('.expand-icon').textContent = '+';
                    } else {
                        expandBtn.querySelector('.expand-text').textContent = '收起图片';
                        expandBtn.querySelector('.expand-icon').textContent = '-';
                    }
                }
            });
        }

        grid.appendChild(card);
    });

    // 初始化懒加载
    initLazyLoading();
}

// ==================== 懒加载功能 ====================
function initLazyLoading() {
    const imageElements = document.querySelectorAll('[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: `${PERFORMANCE_CONFIG.lazyLoadThreshold}px`,
            threshold: 0.1
        });

        imageElements.forEach(img => imageObserver.observe(img));
    } else {
        // 降级处理
        imageElements.forEach(img => loadImage(img));
    }
}

function loadImage(element) {
    const src = element.dataset.src;
    if (!src) return;

    // 创建图片对象预加载
    const img = new Image();
    img.onload = function() {
        element.style.backgroundImage = `url('${src}')`;
        element.classList.add('loaded');
        element.removeAttribute('data-src');
    };
    img.onerror = function() {
        element.style.backgroundColor = 'var(--color-gray-300)';
    };
    img.src = src;
}

// ==================== 模态框功能 ====================
let lastFocusedElement = null;

function openWorkModal(workId) {
    const work = worksData.find(w => w.id === workId);
    if (!work) return;

    const modal = document.getElementById('workModal');
    const modalBody = document.getElementById('modalBody');

    // 保存当前焦点元素
    lastFocusedElement = document.activeElement;

    // 构建模态框内容
    const imagesHtml = work.images && work.images.length > 0
        ? `
            <div class="modal-gallery" role="region" aria-label="作品图片集">
                ${work.images.map((img, index) => `
                    <div class="modal-gallery-item"
                         style="background-image: url('${img}')"
                         role="img"
                         aria-label="作品图片 ${index + 1}"
                         tabindex="0"></div>
                `).join('')}
            </div>
        ` : '';

    modalBody.innerHTML = `
        <div class="modal-hero" style="background-image: url('${work.image}')">
            <div class="modal-hero-content">
                <div class="modal-hero-category">${work.category}</div>
                <h2 class="modal-hero-title">${work.title}</h2>
                <div class="modal-hero-meta">
                    <span>📅 ${work.date}</span>
                    <span>⏱️ ${work.completion}</span>
                </div>
            </div>
        </div>
        <div class="modal-content-inner">
            ${imagesHtml}
            <div class="modal-info">
                <div class="modal-section">
                    <h4 class="modal-section-title">项目介绍</h4>
                    <p class="modal-text">${work.intro}</p>
                </div>
                <div class="modal-section">
                    <h4 class="modal-section-title">设计理念</h4>
                    <p class="modal-text">${work.philosophy}</p>
                </div>
            </div>
            <div class="modal-tech-section">
                <h4 class="modal-section-title">技术栈</h4>
                <div class="modal-tech">
                    ${work.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="modal-completion">
                <strong>完成时间：</strong>${work.completion}
            </div>
        </div>
    `;

    // 设置ARIA属性
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');

    // 添加标题ID用于ARIA引用
    const titleElement = modalBody.querySelector('.modal-hero-title');
    if (titleElement) {
        titleElement.id = 'modal-title';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 确保模态框在视口中心
    ensureModalCentered();

    // 焦点管理
    setTimeout(() => {
        const closeBtn = document.getElementById('modalClose');
        if (closeBtn) {
            closeBtn.focus();
        }
    }, 100);

    // 添加键盘事件监听
    modal.addEventListener('keydown', handleModalKeydown);
}

// 确保抽屉式模态框不会超出视口
function ensureModalCentered() {
    const modal = document.getElementById('workModal');
    if (!modal) return;

    const modalContent = modal.querySelector('.modal-content');
    if (!modalContent) return;

    // 确保抽屉不会超出视口
    const viewportHeight = window.innerHeight;
    const modalHeight = modalContent.offsetHeight;

    // 如果抽屉高度超过视口，限制最大高度
    if (modalHeight > viewportHeight * 0.9) {
        modalContent.style.maxHeight = `${viewportHeight * 0.9}px`;
    } else {
        modalContent.style.maxHeight = '';
    }
}

// 窗口大小改变时重新调整模态框位置
window.addEventListener('resize', function() {
    const modal = document.getElementById('workModal');
    if (modal && modal.classList.contains('active')) {
        ensureModalCentered();
    }
});

function closeWorkModal() {
    const modal = document.getElementById('workModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');

    // 移除键盘事件监听
    modal.removeEventListener('keydown', handleModalKeydown);

    // 恢复焦点
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

function handleModalKeydown(e) {
    const modal = document.getElementById('workModal');
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
}

// ==================== 事件监听器 ====================
function initEventListeners() {
    // 导航栏滚动效果
    window.addEventListener('scroll', handleNavbarScroll);

    // 语言切换
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 按钮点击波纹效果
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            createRippleEffect(this, e);
        });
    });

    // 模态框关闭事件
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (modalClose) {
        modalClose.addEventListener('click', closeWorkModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeWorkModal);
    }

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeWorkModal();
        }
    });
}

// 导航栏滚动处理
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 语言切换
function toggleLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle.textContent === 'EN') {
        langToggle.textContent = '中文';
    } else {
        langToggle.textContent = 'EN';
    }
}

// ==================== 滚动动画 ====================
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.work-card, .about-content, .section-header');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
}

// ==================== 波纹效果 ====================
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ==================== GSAP 3D 滚动动画 ====================
function initGSAPAnimations() {
    // 注册 ScrollTrigger 插件
    gsap.registerPlugin(ScrollTrigger);

    // 创建滚动进度条
    createScrollProgress();

    // 1. 3D 英雄区域视差效果 - 多层深度
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // 背景层 - 最远
        gsap.to(heroContent, {
            y: 150,
            opacity: 0.5,
            scale: 0.95,
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5
            }
        });

        // 文字层 - 中等距离
        const heroName = document.querySelector('.hero-name');
        const heroTitle = document.querySelector('.hero-title');
        const heroDesc = document.querySelector('.hero-desc');

        if (heroName) {
            gsap.to(heroName, {
                y: 80,
                scale: 1.1,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.2
                }
            });
        }

        if (heroTitle) {
            gsap.to(heroTitle, {
                y: 60,
                opacity: 0.7,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.1
                }
            });
        }

        if (heroDesc) {
            gsap.to(heroDesc, {
                y: 40,
                opacity: 0.6,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }
    }

    // 2. 3D 作品卡片滚动动画 - 层层递进效果
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card) => {
        // 设置初始状态 - 不使用scale和rotationX以避免网格布局问题
        gsap.set(card, {
            opacity: 0,
            y: 100
        });

        // 3D 滚动进入动画
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });

        // 悬停效果 - 简化以避免网格布局问题
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // 3. 区域标题3D动画
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        gsap.set(header, {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotationX: 10
        });

        gsap.to(header, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // 4. 关于区域3D滚动效果
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        gsap.set(aboutContent, {
            opacity: 0,
            y: 100,
            rotationX: 5
        });

        gsap.to(aboutContent, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // 5. 技能条3D动画
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar) => {
        const width = bar.style.width;
        gsap.set(bar, { width: '0%' });

        gsap.to(bar, {
            width: width,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // 6. 页面整体3D视差效果
    gsap.to('body', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        }
    });

    // 7. 模态框打开动画（抽屉式）
    const modal = document.getElementById('workModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (modal.classList.contains('active')) {
                        // 使用视口高度的百分比，确保在手机上也能完全从底部滑入
                        const viewportHeight = window.innerHeight;
                        // 在手机上使用更大的位移，确保模态框完全从视口外滑入
                        const slideDistance = viewportHeight * 0.8; // 使用视口高度的80%

                        gsap.fromTo(modalContent,
                            {
                                opacity: 0,
                                y: slideDistance
                            },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.4,
                                ease: 'power3.out'
                            }
                        );
                    }
                }
            });
        });

        observer.observe(modal, { attributes: true });
    }

    // 8. 页面加载3D动画
    gsap.from('.hero-name', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotationX: 15,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        scale: 0.95,
        rotationX: 10,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
    });

    gsap.from('.hero-desc', {
        opacity: 0,
        y: 20,
        scale: 0.98,
        rotationX: 5,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6
    });

    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        scale: 0.98,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8
    });

    // 9. 网格线叠加效果
    createGridOverlay();

    // 10. 滚动指示器
    createScrollIndicator();
}

// 创建滚动进度条
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });
}

// 创建网格线叠加效果
function createGridOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'grid-overlay';
    document.body.appendChild(overlay);

    // 网格线随滚动移动
    gsap.to(overlay, {
        y: -100,
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        }
    });
}

// 创建滚动指示器
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);

    // 滚动时隐藏指示器
    gsap.to(indicator, {
        opacity: 0,
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '100px top',
            scrub: 1
        }
    });
}

// ==================== 性能监控 ====================
const PerformanceMonitor = {
    metrics: {
        loadTime: 0,
        imageLoadTime: 0,
        animationFrameCount: 0,
        modalOpenTime: 0
    },

    init() {
        // 页面加载时间
        window.addEventListener('load', () => {
            this.metrics.loadTime = performance.now();
            console.log(`页面加载时间: ${this.metrics.loadTime.toFixed(2)}ms`);
        });

        // 监控动画性能
        let lastTime = performance.now();
        const checkPerformance = () => {
            const currentTime = performance.now();
            const delta = currentTime - lastTime;

            // 如果帧时间过长，可能是性能问题
            if (delta > 16.67) { // 超过60fps
                console.warn('性能警告: 帧时间过长', delta.toFixed(2) + 'ms');
            }

            lastTime = currentTime;
            this.metrics.animationFrameCount++;
            requestAnimationFrame(checkPerformance);
        };
        requestAnimationFrame(checkPerformance);
    },

    trackImageLoad(startTime) {
        const loadTime = performance.now() - startTime;
        this.metrics.imageLoadTime = loadTime;
        if (loadTime > 1000) {
            console.warn('图片加载缓慢:', loadTime.toFixed(2) + 'ms');
        }
    },

    trackModalOpen() {
        this.metrics.modalOpenTime = performance.now();
    },

    getMetrics() {
        return { ...this.metrics };
    }
};

// 初始化性能监控
PerformanceMonitor.init();

// 添加波纹动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
