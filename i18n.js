// 多语言翻译数据
const translations = {
  zh: {
    title: "VocSeek - AI客服解决方案",
    search: "搜索...",
    nav: {
      home: "首页",
      product: "产品介绍",
      security: "数据安全",
      about: "关于我们",
      contact: "联系方式",
      login: "登录"
    },
    menu: {
      dashboard: "控制台",
      settings: "账户设置",
      logout: "退出登录"
    },
    hero: {
      title: "VocSeek — 面向跨境卖家的 AI 售后与运营中枢",
      subtitle: '<div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>便捷接入亚马逊店铺</span></div><div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>多渠道工单：站内信/邮件/短信/语音</span></div><div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>RAG 知识库+大语言模型，提供自然智能回复</span></div><div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>设计基于隐私优先和最小权限原则，数据安全有保障</span></div>',
      viewPricing: "查看套餐和定价"
    },
    values: {
      title: "为什么选择VocSeek",
      subtitle: "VocSeek集成了最新的人工智能技术,为您提供全方位的智能助理服务",
      voice: {
        title: "自然语音交互",
        desc: "使用先进的语音识别技术,准确理解您的指令,支持多轮对话和上下文理解"
      },
      schedule: {
        title: "7x24小时在线",
        desc: "全天候响应客户咨询，不再错过任何客户意见"
      },
      document: {
        title: "语音生成文档",
        desc: "口述内容即可生成专业文档,自动排版,支持多种文件格式导出"
      },
      translation: {
        title: "多语言实时翻译",
        desc: "支持30+种语言的实时翻译,让跨国沟通无障碍"
      },
      training: {
        title: "个性化AI训练",
        desc: "根据您的使用习惯和偏好,不断优化助手的行为模式"
      },
      security: {
        title: "企业级安全",
        desc: "端到端加密,数据永不离开您的设备,符合企业安全标准"
      }
    },
    workflow: {
      title: "简单三步，开启AI客服",
      step1: {
        title: "注册账号",
        desc: "创建您的VocSeek账户，选择适合的套餐"
      },
      step2: {
        title: "设置AI客服",
        desc: "关联您的电商平台账号，上传商品资料"
      },
      step3: {
        title: "开始使用",
        desc: "AI客服自动处理客户咨询，您可随时查看报告"
      }
    },
    cta: {
      title: "立即体验未来的语音助手",
      subtitle: "加入AI办公的行列，提升您的工作效率和生活方式"
    },
    product: {
      title: "VocSeek - 产品介绍",
      hero: {
        title: "VocSeek AI 客服解决方案",
        subtitle: "为跨境卖家提供智能、高效、安全的客户服务体验"
      },
      showcase: {
        title: "产品展示",
        subtitle: "直观了解 VocSeek 的强大功能",
        dashboard: {
          title: "控制台概览",
          desc: "实时监控客诉处理、解决率和客户满意度"
        },
        insights: {
          title: "消费者洞察",
          desc: "基于AI数据分析的消费者行为洞察与优化建议"
        },
        complaints: {
          title: "客诉处理",
          desc: "高效处理客户投诉，提升客户满意度"
        }
      },
      features: {
        title: "核心优势",
        subtitle: "全方位智能客服解决方案，助力您的业务增长",
        expand: "展开详情",
        collapse: "收起详情",
        amazon: {
          title: "亚马逊店铺接入",
          desc: "一键接入亚马逊店铺，自动同步订单和客户信息，无需手动操作",
          detail: "<li>支持亚马逊 Seller Central 一键授权接入</li><li>自动同步订单、客户信息、产品数据</li><li>实时监控店铺消息和客户咨询</li><li>支持多店铺、多市场同时管理</li><li>数据加密传输，确保信息安全</li>"
        },
        multichannel: {
          title: "多渠道工单管理",
          desc: "统一管理站内信、邮件、短信、语音等多种渠道的客户咨询",
          detail: "<li>统一工单系统，集中处理所有渠道消息</li><li>支持站内信、邮件、短信、语音等多种渠道</li><li>智能工单分配和优先级管理</li><li>实时消息提醒和状态跟踪</li><li>多渠道对话历史统一查看</li>"
        },
        ai: {
          title: "RAG知识库+大语言模型",
          desc: "基于RAG技术的智能知识库，结合大语言模型，提供精准的客户服务响应",
          detail: "<li>基于 RAG（检索增强生成）技术的知识库系统</li><li>集成先进的大语言模型，提供智能对话能力</li><li>支持自定义知识库，上传产品文档和FAQ</li><li>智能语义理解，准确匹配客户问题</li><li>持续学习优化，提升回答准确率</li>"
        },
        quality: {
          title: "质检评分系统",
          desc: "自动对客服回复进行质量评分，确保服务质量和客户满意度",
          detail: "<li>AI自动质检，实时评估回复质量</li><li>多维度评分：准确性、专业性、响应速度等</li><li>生成质检报告和改进建议</li><li>支持人工复核和评分调整</li><li>质量趋势分析和可视化展示</li>"
        },
        keyword: {
          title: "关键词检索",
          desc: "智能关键词检索功能，快速定位相关问题和解决方案",
          detail: "<li>智能关键词提取和匹配</li><li>支持模糊搜索和语义搜索</li><li>快速定位历史对话和解决方案</li><li>关键词统计和热点分析</li><li>自定义关键词规则和标签</li>"
        },
        security: {
          title: "数据安全保障",
          desc: "隐私优先与最小权限原则，确保您的数据安全无忧",
          detail: "<li>端到端加密，数据传输全程保护</li><li>最小权限原则，严格控制数据访问</li><li>符合 GDPR、CCPA 等数据保护法规</li><li>定期安全审计和漏洞扫描</li><li>数据备份和灾难恢复机制</li>"
        }
      },
      pricing: {
        title: "产品套餐",
        subtitle: "灵活多样的套餐选择，满足不同规模企业的需求",
        perMonth: "/月",
        entry: { title: "入门版" },
        pro: { title: "专业版" },
        enterprise: { title: "企业版" },
        enterprisePro: { title: "企业增强版" },
        badge: "已购买",
        features: {
          industryKnowledge: "行业知识应用",
          personalKnowledge: "个性化知识管理",
          ticketSystem: "工单系统",
          intentRecognition: "客户意图识别",
          emotionRecognition: "客户语音情绪识别",
          aiAgents: "AI智能体数量",
          phoneLimit: "电话数量限制",
          callMinutes: "呼叫分钟数限制",
          emailLimit: "邮件数量限制",
          smsCount: "短信数量"
        }
      },
      advantages: {
        title: "产品功能",
        unified: {
          title: "统一工单系统",
          desc: "将亚马逊买卖双方消息、电子邮件、短信和语音通话聚合到一个以订单为中心的视图中"
        },
        ai: {
          title: "AI助手",
          desc: "利用机器学习生成回复建议、总结对话内容，并基于亚马逊订单和消息数据检测客户情绪"
        },
        knowledge: {
          title: "知识库集成",
          desc: "帮助卖家构建和复用标准售后模板，提供使用帮助、故障排除、合规性指导"
        },
        dashboard: {
          title: "绩效与合规仪表板",
          desc: "从历史订单数据生成SLA指标、质量审核和基于关键词的搜索"
        }
      },
      architecture: {
        title: "技术架构",
        subtitle: "基于先进AI技术，构建稳定可靠的服务体系",
        cloud: {
          title: "云端服务",
          desc: "高可用云架构，确保服务稳定"
        },
        ai: {
          title: "AI引擎",
          desc: "大语言模型+RAG技术"
        },
        data: {
          title: "数据层",
          desc: "安全可靠的数据存储"
        }
      },
      scenarios: {
        title: "应用场景",
        order: {
          title: "订单咨询",
          desc: "自动处理订单状态、物流信息等常见咨询"
        },
        return: {
          title: "退换货处理",
          desc: "智能处理退换货申请，自动生成处理流程"
        },
        faq: {
          title: "常见问题解答",
          desc: "基于知识库快速回答客户常见问题"
        },
        review: {
          title: "情绪识别",
          desc: "自动监控客户评价的情绪，及时响应负面情绪"
        }
      },
      cta: {
        title: "立即开始使用 VocSeek",
        subtitle: "体验智能客服带来的效率提升和成本节约",
        trial: "联系我们",
        contact: "联系销售"
      },
      modal: {
        title: "联系我们",
        emailLabel: "联系邮箱："
      }
    },
    security: {
      title: "VocSeek - 数据安全",
      hero: {
        title: "数据安全与隐私保护",
        subtitle: "我们致力于为您的数据提供最高级别的安全保障"
      },
      commitment: {
        title: "我们的安全承诺",
        subtitle: "隐私优先与最小权限原则，确保您的数据安全无忧",
        encryption: {
          title: "端到端加密",
          desc: "所有数据传输采用端到端加密技术，确保数据在传输过程中不被窃取或篡改"
        },
        permission: {
          title: "最小权限原则",
          desc: "严格控制数据访问权限，仅授予必要的访问权限，遵循最小权限原则"
        },
        compliance: {
          title: "合规认证",
          desc: "符合 GDPR、CCPA 等国际数据保护法规，确保数据处理符合法律要求"
        },
        audit: {
          title: "定期安全审计",
          desc: "定期进行安全审计和漏洞扫描，及时发现并修复潜在的安全隐患"
        }
      },
      measures: {
        title: "安全措施",
        data: {
          title: "数据加密",
          desc: "采用 AES-256 加密算法对存储数据进行加密，使用 TLS 1.3 协议保护数据传输安全",
          item1: "静态数据采用 AES-256 加密存储",
          item2: "传输数据使用 TLS 1.3 协议加密",
          item3: "密钥管理采用硬件安全模块（HSM）",
          item4: "定期轮换加密密钥"
        },
        access: {
          title: "访问控制",
          desc: "实施严格的身份认证和访问控制机制，确保只有授权用户才能访问数据",
          item1: "多因素身份认证（MFA）",
          item2: "基于角色的访问控制（RBAC）",
          item3: "会话管理和超时控制",
          item4: "访问日志记录和审计"
        },
        backup: {
          title: "数据备份与恢复",
          desc: "建立完善的数据备份和灾难恢复机制，确保数据不丢失",
          item1: "每日自动备份，保留多版本历史",
          item2: "异地备份存储，防止单点故障",
          item3: "定期恢复测试，确保备份可用",
          item4: "快速灾难恢复机制（RTO < 4小时）"
        },
        monitoring: {
          title: "安全监控",
          desc: "7×24 小时安全监控，实时检测和响应安全威胁",
          item1: "实时入侵检测系统（IDS）",
          item2: "异常行为分析和告警",
          item3: "安全事件响应团队（SOC）",
          item4: "定期安全评估和渗透测试"
        }
      },
      compliance: {
        title: "合规认证",
        subtitle: "我们严格遵守国际数据保护法规和行业标准",
        gdpr: {
          title: "GDPR 合规",
          desc: "符合欧盟《通用数据保护条例》（GDPR），保护欧盟用户的数据隐私权利"
        },
        ccpa: {
          title: "CCPA 合规",
          desc: "符合《加州消费者隐私法案》（CCPA），保障加州消费者的数据隐私"
        },
        iso: {
          title: "ISO 27001",
          desc: "遵循 ISO 27001 信息安全管理体系标准，建立完善的信息安全管理体系"
        },
        soc: {
          title: "SOC 2",
          desc: "通过 SOC 2 Type II 认证，证明我们的安全控制措施有效运行"
        }
      },
      privacy: {
        title: "隐私政策要点",
        viewDetails: "查看详细",
        data: {
          title: "数据收集",
          desc: "我们仅收集提供服务所必需的数据，不会收集无关的个人信息"
        },
        usage: {
          title: "数据使用",
          desc: "数据仅用于提供和改进服务，不会用于其他商业目的或出售给第三方"
        },
        sharing: {
          title: "数据共享",
          desc: "未经您明确同意，我们不会与第三方共享您的数据，除非法律要求"
        },
        rights: {
          title: "用户权利",
          desc: "您有权访问、修改、删除您的数据，或要求我们停止处理您的数据"
        }
      },
      contact: {
        title: "需要帮助？",
        subtitle: "如果您对数据安全有任何疑问或需要报告安全问题，请联系我们的安全团队",
        email: {
          title: "安全邮箱",
          address: "support@vocseek.ai"
        },
        response: {
          title: "响应时间",
          desc: "我们承诺在 24 小时内响应所有安全相关咨询"
        }
      }
    },
    contact: {
      title: "VocSeek - 联系我们",
      hero: {
        title: "联系我们",
        subtitle: "我们期待与您交流，为您提供专业的AI客服解决方案"
      },
      email: {
        title: "邮箱联系",
        desc: "发送邮件至我们的邮箱，我们会在24小时内回复"
      },
      hours: {
        title: "服务时间",
        desc: "我们的团队随时为您服务",
        weekday: "工作日",
        weekend: "周末",
        weekdayTime: "周一至周五 9:00 - 18:00",
        weekendTime: "周六至周日 10:00 - 17:00"
      },
      support: {
        title: "技术支持",
        desc: "遇到技术问题？我们的技术团队随时为您提供帮助",
        response: "响应时间：通常在24小时内回复"
      },
      faq: {
        title: "常见问题",
        subtitle: "快速了解常见问题的答案",
        q1: "如何开始使用VocSeek？",
        a1: "您可以通过注册账号开始使用VocSeek。注册后，您可以关联您的亚马逊店铺，设置AI客服，然后开始使用。如需帮助，请随时联系我们。",
        q2: "VocSeek支持哪些平台？",
        a2: "目前VocSeek主要支持亚马逊平台，可以接入亚马逊Seller Central。",
        q3: "数据安全如何保障？",
        a3: "VocSeek采用端到端加密技术，遵循最小权限原则，确保您的数据安全。我们符合GDPR、CCPA等数据保护法规。更多详情请查看我们的数据安全页面。",
        q4: "如何获取技术支持？",
        a4: "您可以通过邮件联系我们获取技术支持。我们的技术团队会在24小时内回复您的问题。对于紧急问题，我们会优先处理。"
      }
    },
    about: {
      title: "VocSeek - 关于我们",
      hero: {
        title: "关于我们",
        subtitle: "VocSeek AI — 由天津声索科技有限公司提供技术支持"
      },
      intro: {
        title: "公司介绍",
        text: "VocSeek AI 是由 天津声索科技有限公司 搭建和运营的智能客服与售后管理平台，致力于为全球跨境电商卖家提供高效、智能、安全的一体化售后解决方案。我们深耕跨境电商领域多年，了解卖家在售后沟通、服务效率、数据管理等方面的实际痛点，并以技术驱动产品创新，为卖家提供更专业、更稳定的工具服务。"
      },
      mission: {
        title: "我们的使命",
        text: "帮助全球电商卖家以更高效率、更低成本交付更优质的售后服务，通过智能工具提升客户体验与品牌竞争力。"
      },
      capabilities: {
        title: "我们的核心能力",
        channel: {
          title: "多渠道售后支持",
          desc: "将亚马逊站内信、电子邮件、电话、短信等售后渠道进行统一管理，实现集中化处理。"
        },
        ai: {
          title: "AI 智能客服协助",
          desc: "基于产品知识、历史售后数据和订单信息，为卖家提供智能回复建议、自动处理能力与知识辅助。"
        },
        order: {
          title: "订单关联售后管理",
          desc: "自动关联每条售后消息与对应订单，使沟通更高效、信息更准确。"
        },
        knowledge: {
          title: "知识库与数据洞察",
          desc: "通过 AI 自动清洗评论、对话记录、产品说明等内容，持续优化知识库，帮助卖家提升产品与服务质量。"
        },
        security: {
          title: "安全合规的数据处理机制",
          desc: "我们严格遵守亚马逊的数据使用政策，仅访问为实现功能所需的数据，并采取加密与权限管理措施确保数据安全。用户数据不会在未授权的情况下与任何第三方共享。"
        }
      },
      compliance: {
        title: "合规承诺",
        text: "VocSeek AI 在设计之初即将隐私、安全与透明作为核心原则。我们严格遵守亚马逊开发者数据规范，确保数据的收集、使用、存储与清理均符合行业一致标准。"
      },
      vision: {
        title: "我们的愿景",
        text: "成为全球卖家首选的智能售后解决方案提供商，让每一位卖家都能以更专业、更智能的方式实现品牌增长与全球化服务能力提升。"
      },
      contact: {
        label: "联系我们："
      }
    },
    privacy: {
      title: "VocSeek - 隐私政策",
      hero: {
        title: "隐私政策",
        subtitle: "欢迎使用 VocSeek.ai（以下简称\"本平台\"或\"我们\"）。我们非常重视您的个人信息与隐私保护。本《隐私政策》旨在说明我们如何收集、使用、存储和保护您的信息，以及您享有的权利。",
        updated: "更新日期：2025年11月11日",
        effective: "生效日期：2025年11月11日"
      },
      collection: {
        title: "一、我们收集的信息",
        desc: "我们仅收集提供服务所需的最少数据，包括：",
        item1: "卖家账户标识、LWA 刷新令牌、订单/工单元数据",
        item2: "受限数据（PII）：仅在售后或客服目的下短期处理，不长期保存。",
        item3: "站点与应用使用日志：包括访问记录、错误日志及使用统计。"
      },
      usage: {
        title: "二、信息的使用",
        desc: "我们收集的信息用于以下目的：",
        item1: "提供服务功能：售后工单处理、AI 助手、语音转写与知识库功能。",
        item2: "履行合同与法定义务，并提升安全与性能。",
        item3: "生成去标识化统计数据，用于系统优化与业务分析。"
      },
      retention: {
        title: "三、信息的保留与删除",
        item1: "订单/工单元数据：保存 12 个月，用于售后分析与历史追踪。",
        item2: "受限数据（PII）：在售后或客服目的完成后 30 天内删除或去标识化。",
        item3: "用户可通过 <a href=\"https://vocseek.ai/#/uninstall\" target=\"_blank\">https://vocseek.ai/#/uninstall</a> 发起删除请求，或发送邮件至 <a href=\"mailto:support@vocseek.ai\">support@vocseek.ai</a>。"
      },
      sharing: {
        title: "四、共享与跨境传输",
        item1: "仅与签署数据处理协议（DPA）的处理商共享，如语音转写或 AI 模型服务提供商。",
        item2: "跨境数据传输通过加密通道与标准合同条款（SCC）执行。",
        item3: "我们不出售个人信息，也不会将您的数据用于未经授权的广告用途。"
      },
      security: {
        title: "五、安全措施",
        desc: "我们采取行业标准的安全技术和管理措施，包括：",
        item1: "TLS 加密传输与静态加密存储；",
        item2: "分权访问控制与密钥轮换机制；",
        item3: "系统监控与日志审计，确保访问安全可追溯；",
        item4: "若发生安全事件，我们将在 72 小时内通知用户与监管机构。"
      },
      rights: {
        title: "六、您的权利",
        desc: "您享有以下权利，可通过 support@vocseek.ai 与我们联系行使：",
        item1: "访问权：请求查看我们持有的您的数据；",
        item2: "更正权：请求修正不准确的信息；",
        item3: "删除权：请求删除您的个人数据；",
        item4: "限制处理权：限制我们处理您的个人信息；",
        item5: "数据可携权：以结构化、常用格式获取您的数据。",
        contact: "联系地址：",
        address: "天津市河北区望海楼街新大路185号院内2号楼109A-1"
      },
      changes: {
        title: "七、政策更新",
        desc: "我们可能会不时更新本隐私政策。若发生重大变更，我们将在站内明显位置提前公告。"
      },
      copyright: "© 2025 VocSeek.ai 保留所有权利"
    },
    terms: {
      title: "VocSeek - 用户服务协议",
      hero: {
        title: "用户服务协议",
        updated: "更新日期：2025年11月11日",
        effective: "生效日期：2025年11月11日"
      },
      acceptance: {
        title: "一、接受条款",
        desc: "使用 VocSeek.ai 即表示您已阅读、理解并同意本《用户服务协议》及《隐私政策》的所有内容。"
      },
      services: {
        title: "二、服务内容",
        desc: "VocSeek.ai 为跨境电商独立站提供 AI 驱动的智能售后与管理工具，包括但不限于：",
        item1: "AI 售后工单处理与分析",
        item2: "客服语音识别与转写",
        item3: "知识库与智能问答生成",
        item4: "亚马逊 SP-API 授权集成与数据同步",
        note: "我们保留随时修改、更新或终止服务内容的权利，并会在合理范围内提前通知用户。"
      },
      account: {
        title: "三、账户注册与授权",
        item1: "用户需注册 VocSeek.ai 账户，并完成亚马逊 OAuth 授权以使用相关功能。",
        item2: "用户应妥善保管账户凭据，对账户下的所有活动负责。",
        item3: "如发现账户被未授权使用，应立即通知我们。"
      },
      restrictions: {
        title: "四、使用限制",
        desc: "用户在使用本平台时，不得：",
        item1: "违反法律法规或亚马逊政策",
        item2: "滥用、攻击、干扰或逆向工程本平台",
        item3: "未经授权复制、销售或转售本平台的服务或内容",
        item4: "上传病毒、恶意代码或侵犯他人权益的内容",
        note: "如违反本条规定，VocSeek.ai 有权暂停或终止账户并依法追责。"
      },
      billing: {
        title: "五、计费与退款",
        item1: "本平台部分功能基于订阅制计费，费用以官网公示或订单确认信息为准。",
        item2: "除法律规定或平台原因外，已支付费用不予退还。",
        item3: "若服务变更或终止，我们将依据适用法律与合理商业惯例进行处理。"
      },
      disclaimer: {
        title: "六、可用性与免责声明",
        item1: "本平台按\"现状（As Is）\"提供，不保证不间断或无错误运行。",
        item2: "因网络、服务器或第三方因素造成的中断、延迟或数据丢失，VocSeek.ai 不承担责任。"
      },
      liability: {
        title: "七、责任限制",
        desc: "在法律允许的最大范围内，VocSeek.ai 不对因使用或无法使用本服务而导致的任何间接、附带或后果性损害承担责任，包括但不限于利润损失、数据丢失或业务中断。"
      },
      termination: {
        title: "八、终止与数据处理",
        item1: "用户可随时撤销授权或停止使用本平台。",
        item2: "撤销授权或终止使用后，我们将在 30 天内删除或匿名化您的数据，除非法律另有要求。",
        item3: "若用户违反本协议，VocSeek.ai 有权立即终止服务。"
      },
      law: {
        title: "九、适用法律与争议解决",
        item1: "本协议受中华人民共和国法律管辖。",
        item2: "因本协议引起的争议，双方应首先友好协商；协商不成的，提交天津市有管辖权的人民法院解决。"
      },
      contact: {
        title: "十、联系方式",
        desc: "如有疑问、投诉或建议，请通过以下方式联系我们：",
        email: "电子邮箱",
        website: "官方网站",
        address: "公司地址",
        addressValue: "天津市河北区望海楼街新大路185号院内2号楼109A-1"
      },
      copyright: "© 2025 VocSeek.ai 保留所有权利"
    },
    footer: {
      description: "AI客服解决方案提供商",
      privacy: "隐私政策",
      terms: "服务条款",
      contact: {
        title: "联系方式",
        email: "邮箱",
        phone: "电话",
        address: "地址",
        addressValue: "天津市河北区望海楼街新大路185号院内2号楼109A-1"
      },
      links: {
        title: "资源链接",
        home: "首页",
        product: "产品介绍",
        security: "数据安全",
        about: "关于我们",
        contact: "联系方式"
      },
      copyright: "© 2025 VocSeek 版权所有"
    }
  },
  en: {
    title: "VocSeek - AI Customer Service Solution",
    search: "Search...",
    nav: {
      home: "Home",
      product: "Product",
      security: "Data Security",
      about: "About Us",
      contact: "Contact",
      login: "Login"
    },
    menu: {
      dashboard: "Dashboard",
      settings: "Account Settings",
      logout: "Logout"
    },
    hero: {
      title: "VocSeek — AI After-Sales & Operations Hub for Cross-Border Sellers",
      subtitle: '<div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>Easy Amazon store integration</span></div><div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>Multi-channel ticketing: in-app messages, emails, SMS, and voice</span></div><div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>RAG knowledge base powering LLMs for natural, intelligent responses</span></div><div class="subtitle-item"><i class="bi bi-check-circle-fill"></i><span>Designed with privacy-first and least-privilege principles to ensure robust data security</span></div>',
      viewPricing: "View plans and pricing"
    },
    values: {
      title: "Why Choose VocSeek",
      subtitle: "VocSeek leverages the latest AI technologies to deliver comprehensive intelligent assistant services.",
      voice: {
        title: "Natural Language Interaction",
        desc: "Uses advanced speech recognition to accurately interpret commands, supporting multi-turn, context-aware conversations."
      },
      schedule: {
        title: "24/7 Online",
        desc: "Responds to customer inquiries around the clock, never missing any customer feedback."
      },
      document: {
        title: "Voice-to-Document Generation",
        desc: "Dictated content is converted into professional documents with automatic formatting, supporting export to various file formats."
      },
      translation: {
        title: "Multi-language Real-time Translation",
        desc: "Supports real-time translation for 30+ languages, enabling barrier-free cross-border communication."
      },
      training: {
        title: "Personalized AI Training",
        desc: "Continuously optimizes the assistant's behavior patterns based on your usage habits and preferences."
      },
      security: {
        title: "Enterprise-level Security",
        desc: "End-to-end encryption ensures that data never leaves your device and meets enterprise security standards."
      }
    },
    workflow: {
      title: "Three Simple Steps to Start AI Customer Service",
      step1: {
        title: "Create Account",
        desc: "Create your VocSeek account and choose a suitable plan"
      },
      step2: {
        title: "Setup AI Service",
        desc: "Connect your e-commerce platform account and upload product information"
      },
      step3: {
        title: "Start Using",
        desc: "AI customer service automatically handles inquiries, and you can view reports anytime"
      }
    },
    cta: {
      title: "Experience the Future Voice Assistant",
      subtitle: "Join the AI office revolution and enhance your work efficiency and lifestyle"
    },
    product: {
      title: "VocSeek - Product Introduction",
      hero: {
        title: "VocSeek AI Customer Service Solution",
        subtitle: "Providing intelligent, efficient, and secure customer service experience for cross-border sellers"
      },
      showcase: {
        title: "Product Showcase",
        subtitle: "Get an intuitive understanding of VocSeek's powerful features",
        dashboard: {
          title: "Dashboard Overview",
          desc: "Real-time monitoring of complaint handling, resolution rate, and customer satisfaction"
        },
        insights: {
          title: "Consumer Insights",
          desc: "Consumer behavior insights and optimization suggestions based on AI data analysis"
        },
        complaints: {
          title: "Complaint Handling",
          desc: "Efficiently handle customer complaints and improve customer satisfaction"
        }
      },
      features: {
        title: "Core Advantages",
        subtitle: "Comprehensive intelligent customer service solution to boost your business growth",
        expand: "Show Details",
        collapse: "Hide Details",
        amazon: {
          title: "Amazon Store Integration",
          desc: "One-click integration with Amazon stores, automatically sync orders and customer information without manual operation",
          detail: "<li>One-click authorization integration with Amazon Seller Central</li><li>Automatically sync orders, customer information, and product data</li><li>Real-time monitoring of store messages and customer inquiries</li><li>Support multi-store and multi-market management</li><li>Encrypted data transmission to ensure information security</li>"
        },
        multichannel: {
          title: "Multi-channel Ticket Management",
          desc: "Unified management of customer inquiries from messages, emails, SMS, voice and other channels",
          detail: "<li>Unified ticket system to centrally process all channel messages</li><li>Support multiple channels: messages, emails, SMS, voice, etc.</li><li>Intelligent ticket assignment and priority management</li><li>Real-time message alerts and status tracking</li><li>Unified view of multi-channel conversation history</li>"
        },
        ai: {
          title: "RAG + LLM",
          desc: "An intelligent knowledge base leveraging RAG technology, integrated with large language models, delivers precise and natural customer service responses",
          detail: "<li>A knowledge base system leveraging RAG (Retrieval-Augmented Generation) technology.</li><li>Integrated advanced large language models for intelligent dialogue capabilities</li><li>Support custom knowledge base, upload product documents and FAQs</li><li>Intelligent semantic understanding for accurate customer question matching</li><li>Continuous learning and optimization to improve answer accuracy</li>"
        },
        quality: {
          title: "Quality Scoring System",
          desc: "Automatically score customer service responses to ensure service quality and customer satisfaction",
          detail: "<li>AI automatic quality inspection, real-time response quality assessment</li><li>Multi-dimensional scoring: accuracy, professionalism, response speed, etc.</li><li>Generate quality reports and improvement suggestions</li><li>Support manual review and score adjustment</li><li>Quality trend analysis and visualization</li>"
        },
        keyword: {
          title: "Keyword Search",
          desc: "Intelligent keyword search function to quickly locate related issues and solutions",
          detail: "<li>Intelligent keyword extraction and matching</li><li>Support fuzzy search and semantic search</li><li>Quickly locate historical conversations and solutions</li><li>Keyword statistics and hotspot analysis</li><li>Custom keyword rules and tags</li>"
        },
        security: {
          title: "Data Security",
          desc: "Privacy-first and minimal permissions principle to ensure your data security",
          detail: "<li>End-to-end encryption for full data transmission protection</li><li>Minimal permissions principle with strict data access control</li><li>Compliance with GDPR, CCPA and other data protection regulations</li><li>Regular security audits and vulnerability scanning</li><li>Data backup and disaster recovery mechanisms</li>"
        }
      },
      pricing: {
        title: "Product Plans",
        subtitle: "Flexible plans to meet the needs of businesses of all sizes",
        perMonth: "/mo",
        entry: { title: "Starter" },
        pro: { title: "Pro" },
        enterprise: { title: "Enterprise" },
        enterprisePro: { title: "Enterprise Pro" },
        badge: "Purchased",
        features: {
          industryKnowledge: "Industry knowledge application",
          personalKnowledge: "Personalized knowledge management",
          ticketSystem: "Ticket system",
          intentRecognition: "Customer intent recognition",
          emotionRecognition: "Customer voice emotion recognition",
          aiAgents: "AI agents",
          phoneLimit: "Phone limit",
          callMinutes: "Call minutes limit",
          emailLimit: "Email limit",
          smsCount: "SMS quantity"
        }
      },
      advantages: {
        title: "Product Features",
        unified: {
          title: "Unified Ticket System",
          desc: "Aggregate Amazon buyer-seller messages, emails, SMS, and voice calls into a single order-centric view"
        },
        ai: {
          title: "AI Assistant",
          desc: "Use machine learning to generate reply suggestions, summarize conversations, and detect customer sentiment based on Amazon order and message data"
        },
        knowledge: {
          title: "Knowledge Base Integration",
          desc: "Help sellers build and reuse standard after-sales templates, providing usage help, troubleshooting, and compliance guidance"
        },
        dashboard: {
          title: "Performance & Compliance Dashboard",
          desc: "Generate SLA metrics, quality audits, and keyword-based search from historical order data"
        }
      },
      architecture: {
        title: "Technical Architecture",
        subtitle: "Based on advanced AI technology, building a stable and reliable service system",
        cloud: {
          title: "Cloud Services",
          desc: "High-availability cloud architecture ensuring service stability"
        },
        ai: {
          title: "AI Engine",
          desc: "Large Language Model + RAG Technology"
        },
        data: {
          title: "Data Layer",
          desc: "Secure and reliable data storage"
        }
      },
      scenarios: {
        title: "Application Scenarios",
        order: {
          title: "Order Inquiries",
          desc: "Automatically handle common inquiries about order status, logistics information, etc."
        },
        return: {
          title: "Return & Exchange Processing",
          desc: "Intelligently process return and exchange applications, automatically generate processing workflows"
        },
        faq: {
          title: "FAQ",
          desc: "Quickly answer common customer questions based on knowledge base"
        },
        review: {
          title: "Sentiment Recognition",
          desc: "Automatically monitor customer review sentiment and respond promptly to negative emotions"
        }
      },
      cta: {
        title: "Start Using VocSeek Now",
        subtitle: "Experience the efficiency improvement and cost savings brought by intelligent customer service",
        trial: "Contact Us",
        contact: "Contact Sales"
      },
      modal: {
        title: "Contact Us",
        emailLabel: "Email:"
      }
    },
    security: {
      title: "VocSeek - Data Security",
      hero: {
        title: "Data Security & Privacy Protection",
        subtitle: "We are committed to providing the highest level of security for your data"
      },
      commitment: {
        title: "Our Security Commitment",
        subtitle: "Privacy-first and minimal permissions principle to ensure your data security",
        encryption: {
          title: "End-to-End Encryption",
          desc: "All data transmission uses end-to-end encryption technology to ensure data is not stolen or tampered with during transmission"
        },
        permission: {
          title: "Minimal Permissions Principle",
          desc: "Strictly control data access permissions, only grant necessary access permissions, following the principle of least privilege"
        },
        compliance: {
          title: "Compliance Certification",
          desc: "Compliant with GDPR, CCPA and other international data protection regulations to ensure data processing meets legal requirements"
        },
        audit: {
          title: "Regular Security Audits",
          desc: "Regular security audits and vulnerability scanning to identify and fix potential security risks in a timely manner"
        }
      },
      measures: {
        title: "Security Measures",
        data: {
          title: "Data Encryption",
          desc: "Use AES-256 encryption algorithm to encrypt stored data, and TLS 1.3 protocol to protect data transmission security",
          item1: "Static data encrypted with AES-256",
          item2: "Transmission data encrypted with TLS 1.3 protocol",
          item3: "Key management using Hardware Security Module (HSM)",
          item4: "Regular encryption key rotation"
        },
        access: {
          title: "Access Control",
          desc: "Implement strict identity authentication and access control mechanisms to ensure only authorized users can access data",
          item1: "Multi-factor authentication (MFA)",
          item2: "Role-based access control (RBAC)",
          item3: "Session management and timeout control",
          item4: "Access log recording and auditing"
        },
        backup: {
          title: "Data Backup & Recovery",
          desc: "Establish comprehensive data backup and disaster recovery mechanisms to ensure data is not lost",
          item1: "Daily automatic backup with multi-version history",
          item2: "Off-site backup storage to prevent single point of failure",
          item3: "Regular recovery testing to ensure backup availability",
          item4: "Fast disaster recovery mechanism (RTO < 4 hours)"
        },
        monitoring: {
          title: "Security Monitoring",
          desc: "7×24 hour security monitoring to detect and respond to security threats in real-time",
          item1: "Real-time Intrusion Detection System (IDS)",
          item2: "Anomaly behavior analysis and alerts",
          item3: "Security Operations Center (SOC) team",
          item4: "Regular security assessments and penetration testing"
        }
      },
      compliance: {
        title: "Compliance Certifications",
        subtitle: "We strictly comply with international data protection regulations and industry standards",
        gdpr: {
          title: "GDPR Compliance",
          desc: "Compliant with EU General Data Protection Regulation (GDPR) to protect EU users' data privacy rights"
        },
        ccpa: {
          title: "CCPA Compliance",
          desc: "Compliant with California Consumer Privacy Act (CCPA) to protect California consumers' data privacy"
        },
        iso: {
          title: "ISO 27001",
          desc: "Follow ISO 27001 Information Security Management System standards to establish a comprehensive information security management system"
        },
        soc: {
          title: "SOC 2",
          desc: "SOC 2 Type II certified, demonstrating that our security controls are operating effectively"
        }
      },
      privacy: {
        title: "Privacy Policy Highlights",
        viewDetails: "View Details",
        data: {
          title: "Data Collection",
          desc: "We only collect data necessary to provide services and will not collect irrelevant personal information"
        },
        usage: {
          title: "Data Usage",
          desc: "Data is only used to provide and improve services, and will not be used for other commercial purposes or sold to third parties"
        },
        sharing: {
          title: "Data Sharing",
          desc: "We will not share your data with third parties without your explicit consent, unless required by law"
        },
        rights: {
          title: "User Rights",
          desc: "You have the right to access, modify, delete your data, or request us to stop processing your data"
        }
      },
      contact: {
        title: "Need Help?",
        subtitle: "If you have any questions about data security or need to report a security issue, please contact our security team",
        email: {
          title: "Security Email",
          address: "support@vocseek.ai"
        },
        response: {
          title: "Response Time",
          desc: "We commit to responding to all security-related inquiries within 24 hours"
        }
      }
    },
    contact: {
      title: "VocSeek - Contact Us",
      hero: {
        title: "Contact Us",
        subtitle: "We look forward to communicating with you and providing professional AI customer service solutions"
      },
      email: {
        title: "Email Contact",
        desc: "Send an email to our mailbox, and we will reply within 24 hours"
      },
      hours: {
        title: "Service Hours",
        desc: "Our team is always ready to serve you",
        weekday: "Weekdays",
        weekend: "Weekends",
        weekdayTime: "Monday - Friday 9:00 - 18:00",
        weekendTime: "Saturday - Sunday 10:00 - 17:00"
      },
      support: {
        title: "Technical Support",
        desc: "Encountering technical issues? Our technical team is always ready to help",
        response: "Response Time: Usually reply within 24 hours"
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to common questions",
        q1: "How to get started with VocSeek?",
        a1: "You can start using VocSeek by registering an account. After registration, you can connect your Amazon store, set up AI customer service, and then start using it. If you need help, please feel free to contact us.",
        q2: "Which platforms does VocSeek support?",
        a2: "Currently, VocSeek mainly supports the Amazon platform and can integrate with Amazon Seller Central.",
        q3: "How is data security guaranteed?",
        a3: "VocSeek uses end-to-end encryption technology and follows the principle of minimal permissions to ensure your data security. We comply with GDPR, CCPA and other data protection regulations. For more details, please visit our data security page.",
        q4: "How to get technical support?",
        a4: "You can contact us via email for technical support. Our technical team will reply to your questions within 24 hours. For urgent issues, we will prioritize them."
      }
    },
    about: {
      title: "VocSeek - About Us",
      hero: {
        title: "About Us",
        subtitle: "VocSeek AI – Powered by Tianjin VocSeek Technology Co., Ltd."
      },
      intro: {
        title: "Company Introduction",
        text: "VocSeek AI is a technology company dedicated to empowering global e-commerce businesses with intelligent customer service solutions. Operated by Tianjin VocSeek Technology Co., Ltd., we specialize in building AI-driven after-sales platforms that help merchants streamline communication, improve service efficiency, and enhance customer satisfaction across multiple channels. With years of experience in cross-border e-commerce and customer-support automation, our team developed VocSeek AI to solve the growing challenges sellers face in managing post-purchase interactions—such as inquiries from Amazon buyers, email tickets, phone support, and social-media messages. Our platform consolidates these touchpoints into one unified system and uses AI to assist merchants with timely, accurate responses based on their product knowledge and service policies."
      },
      mission: {
        title: "Our Mission",
        text: "To help e-commerce sellers deliver high-quality, responsive, and data-driven customer service through secure, intelligent, and easy-to-use technology."
      },
      capabilities: {
        title: "Our Core Capabilities",
        channel: {
          title: "Multi-channel After-Sales Support",
          desc: "Unified handling of Amazon messages, emails, phone inquiries, SMS, and more."
        },
        ai: {
          title: "AI-Powered Assistance",
          desc: "Intelligent recommendations and automated replies based on product knowledge, FAQs, order details, and historical service data."
        },
        order: {
          title: "Order-Linked Service Management",
          desc: "Centralized views of customer issues, tied directly to order information for faster resolution."
        },
        knowledge: {
          title: "Knowledge-Base Automation",
          desc: "AI extracts insights from reviews, past conversations, and product documents, continuously improving support quality."
        },
        security: {
          title: "Secure Data Handling",
          desc: "We follow strict data-protection standards and only access Amazon information necessary to provide the requested features. Customer data is never shared with third parties unless required for service delivery and explicitly disclosed."
        }
      },
      compliance: {
        title: "Compliance Commitment",
        text: "VocSeek AI is built with privacy, transparency, and data security as top priorities. We adhere to Amazon's data-usage policies, retain data only for the minimum required time, and ensure secure storage and transmission of all information."
      },
      vision: {
        title: "Our Vision",
        text: "To become the leading customer-service intelligence platform for global sellers—helping brands grow through better support experiences, operational efficiency, and actionable insights."
      },
      contact: {
        label: "Contact Us:"
      }
    },
    privacy: {
      title: "VocSeek - Privacy Policy",
      hero: {
        title: "Privacy Policy",
        subtitle: "Welcome to VocSeek.ai (\"we\", \"our\", or \"the Platform\"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, retain, and safeguard your data, as well as your rights regarding that information.",
        updated: "Last Updated: November 11, 2025",
        effective: "Effective Date: November 11, 2025"
      },
      collection: {
        title: "1. Information We Collect",
        desc: "We collect only the minimum data necessary to provide our services, including:",
        item1: "Seller account identifiers, Login with Amazon (LWA) refresh tokens, and order/ticket metadata.",
        item2: "Restricted Data (PII): Processed temporarily only when necessary for after-sales or support purposes, not stored permanently.",
        item3: "Site and app usage logs: Access records, error logs, and usage analytics."
      },
      usage: {
        title: "2. Use of Information",
        desc: "We use the collected information for the following purposes:",
        item1: "To provide services: After-sales ticket handling, AI assistant, voice transcription, and knowledge base functions.",
        item2: "To fulfill contractual or legal obligations, and to improve security and performance.",
        item3: "To generate de-identified statistical data for system optimization and business analytics."
      },
      retention: {
        title: "3. Retention and Deletion",
        item1: "Order/Ticket metadata: Retained for 12 months for analytics and service history.",
        item2: "Restricted Data (PII): Deleted or anonymized within 30 days after the after-sales purpose is fulfilled.",
        item3: "You may submit a data deletion request at <a href=\"https://vocseek.ai/#/uninstall\" target=\"_blank\">https://vocseek.ai/#/uninstall</a> or email <a href=\"mailto:support@vocseek.ai\">support@vocseek.ai</a>."
      },
      sharing: {
        title: "4. Data Sharing and Cross-Border Transfers",
        item1: "Shared only with processors under a signed Data Processing Agreement (DPA), such as voice transcription or AI service providers.",
        item2: "Cross-border transfers are conducted through encrypted channels and governed by Standard Contractual Clauses (SCCs).",
        item3: "We do not sell personal information or use your data for unauthorized advertising purposes."
      },
      security: {
        title: "5. Security Measures",
        desc: "We employ industry-standard security and management measures, including:",
        item1: "TLS encryption in transit and encryption at rest;",
        item2: "Role-based access control and key rotation;",
        item3: "System monitoring and audit logging to ensure traceable and secure access;",
        item4: "In the event of a data breach, affected users and authorities will be notified within 72 hours."
      },
      rights: {
        title: "6. Your Rights",
        desc: "You have the following rights, which you may exercise by contacting support@vocseek.ai:",
        item1: "Right of Access: Request to view the data we hold about you;",
        item2: "Right to Rectification: Request to correct inaccurate information;",
        item3: "Right to Erasure: Request deletion of your personal data;",
        item4: "Right to Restrict Processing: Restrict our processing of your personal information;",
        item5: "Right to Data Portability: Obtain your data in a structured, commonly used format.",
        contact: "Contact Address:",
        address: "Building 2-109A-1, No.185 Xindalu, Wanghai Lou Street, Hebei District, Tianjin, China"
      },
      changes: {
        title: "7. Policy Updates",
        desc: "We may update this Privacy Policy from time to time. In the event of significant changes, we will notify users through prominent in-site announcements prior to implementation."
      },
      copyright: "© 2025 VocSeek.ai All Rights Reserved"
    },
    terms: {
      title: "VocSeek - User Service Agreement",
      hero: {
        title: "User Service Agreement",
        updated: "Last Updated: November 11, 2025",
        effective: "Effective Date: November 11, 2025"
      },
      acceptance: {
        title: "1. Acceptance of Terms",
        desc: "By accessing or using VocSeek.ai, you acknowledge that you have read, understood, and agreed to be bound by this User Service Agreement and the Privacy Policy."
      },
      services: {
        title: "2. Services Provided",
        desc: "VocSeek.ai provides AI-powered after-sales and management tools for cross-border e-commerce independent sites, including but not limited to:",
        item1: "AI-powered after-sales ticket processing and analytics",
        item2: "Customer voice transcription and management",
        item3: "Knowledge base creation and intelligent Q&A",
        item4: "Amazon SP-API integration and data synchronization",
        note: "We reserve the right to modify, update, or discontinue any services at any time with reasonable prior notice."
      },
      account: {
        title: "3. Account Registration and Authorization",
        item1: "Users must register a VocSeek.ai account and complete Amazon OAuth authorization to access related functions.",
        item2: "Users are responsible for safeguarding their login credentials and all activities conducted under their account.",
        item3: "If unauthorized use is detected, users must notify us immediately."
      },
      restrictions: {
        title: "4. Usage Restrictions",
        desc: "When using this platform, users must not:",
        item1: "Violate any applicable laws, regulations, or Amazon policies",
        item2: "Abuse, attack, interfere with, or reverse-engineer the platform",
        item3: "Copy, resell, or redistribute any platform content or services without authorization",
        item4: "Upload viruses, malicious code, or content that infringes upon others' rights",
        note: "Violation of these rules may result in account suspension or termination, and legal action may be pursued."
      },
      billing: {
        title: "5. Billing and Refunds",
        item1: "Certain features are billed via subscription; fees are based on prices shown on the website or in order confirmations.",
        item2: "Payments are non-refundable except as required by law or due to platform fault.",
        item3: "If services are changed or discontinued, we will handle fees and settlements in accordance with applicable laws and fair business practices."
      },
      disclaimer: {
        title: "6. Availability and Disclaimer",
        item1: "The platform is provided on an \"as-is\" basis without guarantees of uninterrupted or error-free operation.",
        item2: "VocSeek.ai shall not be held liable for interruptions, delays, or data loss caused by network, server, or third-party issues."
      },
      liability: {
        title: "7. Limitation of Liability",
        desc: "To the maximum extent permitted by law, VocSeek.ai shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the services, including but not limited to lost profits, data loss, or business interruption."
      },
      termination: {
        title: "8. Termination and Data Handling",
        item1: "Users may revoke authorization or stop using the platform at any time.",
        item2: "Upon termination or revocation, we will delete or anonymize your data within 30 days, unless otherwise required by law.",
        item3: "VocSeek.ai reserves the right to terminate services immediately in case of a violation of this Agreement."
      },
      law: {
        title: "9. Governing Law and Dispute Resolution",
        item1: "This Agreement shall be governed by the laws of the People's Republic of China.",
        item2: "Any disputes arising hereunder shall first be resolved through friendly negotiation; if unsuccessful, they shall be submitted to the competent court in Tianjin, China."
      },
      contact: {
        title: "10. Contact Information",
        desc: "If you have questions, complaints, or suggestions, please contact us via:",
        email: "Email",
        website: "Website",
        address: "Address",
        addressValue: "Building 2-109A-1, No.185 Xindalu, Wanghai Lou Street, Hebei District, Tianjin, China"
      },
      copyright: "© 2025 VocSeek.ai All Rights Reserved"
    },
    footer: {
      description: "AI Customer Service Solution Provider",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: {
        title: "Contact",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressValue: "Room 109A-1, Building 2, No. 185 Xinda Road, Wanghailou Street, Hebei District, Tianjin, China"
      },
      links: {
        title: "Resources",
        home: "Home",
        product: "Product",
        security: "Data Security",
        about: "About Us",
        contact: "Contact"
      },
      copyright: "© 2025 VocSeek All Rights Reserved"
    }
  }
};

// 获取当前语言，默认为英文
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// 设置语言
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  updatePageLanguage(lang);
  // 触发语言切换事件
  if (typeof CustomEvent !== 'undefined') {
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }
}


// 获取嵌套对象的值
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// 初始化语言切换功能
let isUpdating = false;

function initLanguageSwitcher() {
  // 监听语言切换下拉选择框变化（使用事件委托）
  document.addEventListener('change', function (e) {
    var target = e.target;

    // 检查是否是语言选择下拉框
    if (target && (target.classList && target.classList.contains('lang-select') || target.id === 'language-select')) {
      var lang = target.value;
      if (lang) {
        setLanguage(lang);
      }
    }
  });

  // 页面加载时应用保存的语言
  const currentLang = getCurrentLanguage();
  updatePageLanguage(currentLang);

  // 监听 DOM 变化，以便在动态加载内容后也能更新语言
  var observer = null;
  if (typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver(function (mutations) {
      if (isUpdating) return; // 防止无限循环

      // 检查是否有新的元素被添加
      var hasNewElements = false;
      try {
        for (var m = 0; m < mutations.length; m++) {
          var mutation = mutations[m];
          if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
              var node = mutation.addedNodes[i];
              if (node && node.nodeType === 1) {
                if (node.hasAttribute && node.hasAttribute('data-i18n')) {
                  hasNewElements = true;
                  break;
                }
                if (node.querySelector && node.querySelector('[data-i18n]')) {
                  hasNewElements = true;
                  break;
                }
              }
            }
            if (hasNewElements) break;
          }
        }
      } catch (error) {
        console.warn('Error in MutationObserver:', error);
      }

      if (hasNewElements) {
        var currentLang = getCurrentLanguage();
        // 延迟执行，确保 DOM 完全更新
        setTimeout(function () {
          updatePageLanguage(currentLang);
        }, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

// 更新页面语言（添加防重复更新）
function updatePageLanguage(lang) {
  if (isUpdating) return;
  isUpdating = true;

  try {
    const langData = translations[lang];
    if (!langData) {
      isUpdating = false;
      return;
    }

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const value = getNestedValue(langData, key);
      if (value !== undefined) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = value;
        } else if (element.tagName === 'TITLE') {
          element.textContent = value;
        } else {
          element.innerHTML = value;
        }
      }
    });

    // 更新所有带有 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const value = getNestedValue(langData, key);
      if (value !== undefined) {
        element.placeholder = value;
      }
    });

    // 更新语言切换下拉选择框状态
    document.querySelectorAll('.lang-select, #language-select').forEach(select => {
      if (select.value !== lang) {
        select.value = lang;
      }
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
  } catch (error) {
    console.error('Error updating page language:', error);
  } finally {
    isUpdating = false;
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}

