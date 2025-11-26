/**
 * 通用分类筛选功能
 * 可以在任何页面上使用，只需要按照特定的HTML结构设置
 * 
 * HTML结构要求：
 * 1. 分类按钮容器：使用category-buttons类
 * 2. 每个分类按钮：使用category-btn类，并设置data-category属性
 * 3. 项目列表容器：使用note-list类
 * 4. 每个项目项：使用note-item类，并设置data-category属性
 * 
 * @param {Object} options - 配置选项
 * @param {string} options.activeClassName - 激活状态的类名，默认为'active'
 * @param {string} options.buttonContainerSelector - 按钮容器选择器，默认为'.category-buttons'
 * @param {string} options.itemContainerSelector - 项目容器选择器，默认为'.note-list'
 * @param {string} options.buttonSelector - 按钮选择器，默认为'.category-btn'
 * @param {string} options.itemSelector - 项目选择器，默认为'.note-item'
 * @param {string} options.allCategoryValue - '全部'分类的值，默认为'all'
 */
function initCategoryFilter(options = {}) {
    // 默认配置
    const config = {
        activeClassName: 'active',
        buttonContainerSelector: '.category-buttons',
        itemContainerSelector: '.note-list',
        buttonSelector: '.category-btn',
        itemSelector: '.note-item',
        allCategoryValue: 'all',
        ...options
    };

    // 在DOM加载完成后执行
    document.addEventListener('DOMContentLoaded', function() {
        const categoryButtons = document.querySelectorAll(config.buttonSelector);
        const noteItems = document.querySelectorAll(config.itemSelector);

        if (categoryButtons.length === 0 || noteItems.length === 0) {
            console.warn('Category filter: 未找到分类按钮或项目项');
            return;
        }

        // 为每个按钮添加点击事件
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active状态
                categoryButtons.forEach(btn => btn.classList.remove(config.activeClassName));
                // 为当前点击的按钮添加active状态
                this.classList.add(config.activeClassName);

                const category = this.getAttribute('data-category');
                
                // 筛选项目
                noteItems.forEach(item => {
                    if (category === config.allCategoryValue || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
}

// 导出函数，支持模块化使用
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { initCategoryFilter };
}

// 如果不使用模块化，可以直接调用并传入配置
// initCategoryFilter(); // 可以在HTML中通过<script>标签引入后手动调用