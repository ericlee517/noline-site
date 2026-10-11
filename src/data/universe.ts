// Noline 小说宇宙 · 内容数据
// 在这里集中维护文案，页面会自动渲染。可直接替换为你自己的内容。
//
// 如何添加内容：
//   1. 新角色 → 复制 characters 里的一条，改 name / slug / bio 即可
//      slug 会决定详情页地址：/characters/你的slug（用小写字母、数字、连字符）
//   2. 新作品 → 复制 works 里的一条，改 title / slug / summary 即可
//      slug 会决定详情页地址：/works/你的slug
//   3. bio / summary 是「段落数组」，一句写一段，写几句就加几个字符串

export const site = {
  name: 'NoLIne',
  nameCn: '无界宇宙',
  tagline: '故事没有边界',
  intro:
    '跨越空间的间隔，寻找被遗忘的另一边。',
  nav: [
    { label: '世界观', href: '/#worldview' },
    { label: '角色', href: '/#characters' },
    { label: '作品', href: '/#works' },
  ],
};

// 世界观简介：若干主题句，逐条呈现
export const worldview = {
  eyebrow: 'Worldview',
  title: '世界观简介',
  paragraphs: [
    '在 无界宇宙里，每个在宇宙中的人发生的故事，都会影响到其他人的故事。',
    '当两条本不该相交的线相遇，世界就会裂开一道缝——缝隙的另一侧，是被选择取代命运的地方。',
    '所有的故事都发生在「线」的背面。那里没有既定的结局，只有尚未被书写的可能。',
  ],
  principles: [
    { k: '折叠', v: '时间可以被收拢成一枚书签，随时翻回某个瞬间。' },
    { k: '裂隙', v: '每一次相遇，都是现实被轻轻撕开的一道缝。' },
    { k: '重写', v: '在线的背面，你拥有把结局改写的权限。' },
  ],
};

// 角色介绍
export interface Character {
  slug: string; // 详情页地址 /characters/<slug>
  name: string;
  alias: string;
  role: string;
  desc: string; // 首页卡片 + 详情页开头的一句话
  bio: string[]; // 详情页正文，一句一段
  quote?: string; // 可选：详情页的一句台词
  tint: string; // 卡片点缀色
}

export const characters: Character[] = [
  {
    slug: 'zhaoyidong',
    name: '赵一东',
    alias: 'Zhao Yidong',
    role: '灿阳之下',
    desc: '',
    bio: [
      'Ta还没有简介。'
    ],
    tint: 'rgb(249, 227, 137)',
  }
];

// 宇宙下的作品
export interface Work {
  slug: string; // 详情页地址 /works/<slug>
  title: string;
  genre: string;
  status: string; // 连载中 / 已完结 / 筹备中
  blurb: string; // 首页列表 + 详情页开头的一句话
  summary: string[]; // 详情页正文，一句一段
  readUrl?: string; // 阅读入口：不填则默认站内阅读页 /works/<slug>/read；填 https 链接会自动在新标签打开
  readLabel?: string; // 阅读按钮文字，默认「开始阅读」
  tint?: string; // 可选：作品专属色（列表光带、详情页光晕），不填则用默认粉色
}

export const works: Work[] = [
  {
    slug: 'under-the-sun',
    title: '灿阳之下',
    genre: '中篇 / 青春',
    status: '敬请期待',
    blurb: '',
    summary: [
      'Ta还没有简介。'
    ],
    tint: 'rgb(249, 227, 137)',
  }
];

// 页脚
export interface Link {
  label: string;
  href: string;
}

export const footer = {
  links: [
    { label: '世界观', href: '/#worldview' },
    { label: '角色', href: '/#characters' },
    { label: '作品', href: '/#works' },
  ],
  // 社交链接：填上真实地址就会出现在页脚；保持为空则自动隐藏
  social: [] as Link[],
  note: 'Story Has No Line.',
};
