export const defFields = {
  markdown: {
    type: 'markdown',
    name: 'markdown',
    value: "",        // 默认值
    label: "笔记",
    rule: {
      required: true,
      message: 'markdown 不能为空',
      trigger: 'blur'
    }
  },
  editor: {
    type: 'editor',
    name: 'editor',
    value: "",        // 默认值
    label: "详情",
    rule: {
      required: true,
      message: '详情不能为空',
      trigger: 'blur'
    }
  },
  upload: {
    type: 'upload',
    name: 'image',
    value: "",        // 默认值
    label: "上传封面",
    width: "375px",
    height: "70px",
    noEdit: false,
    rule: {
      required: true,
      message: '请上传封面',
      trigger: 'blur'
    }
  },
  'upload-album': {
    type: 'upload-album',
    name: 'images-album',
    value: [],        // 默认值
    label: "上传相册",
    noEdit: false,
    rule: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: '请上传详情',
        trigger: 'change'
      },{
        type: 'array',
        max: 9,
        message: '最多上传九张图片',
        trigger: 'change'
      }
    ]
  },
  'upload-detail': {
    type: 'upload-detail',
    name: 'images',
    label: "上传详情",
    width: "375px",
    height: "70px",
    noEdit: false,
    rule: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: '请上传详情',
        trigger: 'change'
      },{
        type: 'array',
        max: 9,
        message: '最多上传九张图片',
        trigger: 'change'
      }
    ]
  },
  search: {
    type: 'search',
    name: 'keyword',
    value: "",
    label: "搜索",
    placeholder: "请输入关键字",
    "enter-button": true,    // 显示搜索图标，如果没有该选项，则只显示 搜索图标，没有按钮
    "enter-button": "搜索",
    readonly: false,
    disabled: false,
  },
  text: {
    type: 'text',
    name: 'name',
    value: "",
    label: "名称",
    maxlength: 30,
    placeholder: "请输入名称",
    readonly: false,
    disabled: false,
    prefix: "ios-contact",
    suffix: "ios-search",
    rule: {
      required: true,
      message: '名称不能为空',
      trigger: 'blur'
    }
  },
  number: {
    type: 'number',
    name: 'age',
    value: 0,
    label: "",
    placeholder: "请输入",
    rule: {
      required: true,
      message: '请输入正确的',
      min: 1,
      max: 100,
      trigger: 'blur',
      type: 'number'
    }
  },
  email: {
    type: 'email',
    name: 'email',
    label: "邮箱",
    placeholder: "请输入邮箱",
    rule: [{
        required: true,
        message: '邮箱不能为空',
        trigger: 'blur'
      },
      {
        type: 'email',
        message: '请输入正确的邮箱格式',
        trigger: 'blur'
      }
    ]
  },
  password: {
    type: 'password',
    name: 'password',
    label: "密码",
    placeholder: "请输入密码",
    prefix: 'md-lock',
    noconfirm: false,    // 不需要确认密码
    rule: {
      required: true,
      message: '请输入正确的密码格式',
      min: 6,
      max: 16,
      trigger: 'blur'
    }
  },
  password_confirmation: {
    type: 'password_confirmation',
    name: 'password_confirmation',
    label: "确认密码",
    placeholder: "请输入确认密码",
    prefix: 'md-lock',
    rule: {
      required: true,
      message: '请输入正确的密码格式',
      min: 6,
      max: 16,
      trigger: 'blur'
    }
  },
  textarea: {
    type: 'textarea',
    name: 'info',
    value: "",
    label: "描述",
    rows: 4,
    autosize: { minRows: 4, maxRows: 6 },
    maxlength: 200,
    'show-word-limit': true,
    placeholder: "请输入描述",
    readonly: false,
    disabled: false,
  },
  radio: {
    type: 'radio',
    name: 'status',
    label: "状态",
    group: {
      // type: 'button',
      // vertical: true,
    },
    radios: [
      // {label: "未审核", value: 0, border: true},
      // {label: "已审核", value: 1, border: false},
      // {label: "已驳回", value: -1, border: true}
    ],
    rule: {       // 如果没有，rule 不验证
      required: true,
      message: '请选择状态',
      trigger: 'change'
    }
  },
  checkbox: {
    type: 'checkbox',
    name: 'checkbox',
    label: "兴趣",
    value: [],
    checkboxs: [
      // {label: "打球", value: "boll", border: true},
      // {label: "玩游戏", value: "gaming", border: false},
      // {label: "睡觉", value: "sleep", border: true}
    ],
    rule: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: '请选择兴趣',
        trigger: 'change'
      },{
        type: 'array',
        max: 999,
        message: '最多选择 999 个兴趣',
        trigger: 'change'
      }
    ]
  },
  'checkbox-only': {
    type: 'checkbox-only',
    name: 'is_onsale',
    label: "上架",
    value: 1,
    disabled: false,
    rule: {
      required: true,
      type: 'number',
      min: 1,
      message: '必须选中复选框',
      trigger: 'change'
    }
  },
  switch: {
    type: 'switch',
    name: 'switch',
    label: "开关",
    value: 1,
    disabled: false,
    'true-color': "#c71e1e",
    'false-color': "#8e8787",
    rule: {
      required: true,
      type: 'number',
      min: 1,
      message: '必须开启开关',
      trigger: 'change'
    }
  },
  select: {
    type: 'select',
    name: 'category',
    label: "分类",
    value: '1',
    placeholder: "请选择分类",
    filterable: true,
    prefix: 'md-lock',
    'not-found-text': "没有匹配结果",
    disabled: false,
    clearable: true,
    options: [
      // {label: "打球", value: '1', disabled: false},
      // {label: "打游戏", value: '2', disabled: false},
    ],
    optionGroups: [],
    rule: {
      required: true,
      message: '请选择分类',
      trigger: 'change'
    }
  },
  'select-mult': {
    type: 'select-mult',
    name: 'category_mult',
    label: "分类",
    value: [],
    placeholder: "请选择多个分类",
    disabled: false,
    clearable: true,
    filterable: true,
    'max-tag-count': 2,
    'max-tag-placeholder': function (num) {
      return '更多 + ' + num;
    },
    optionGroups: [],
    rule: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: '请选择多选分类',
        trigger: 'change'
      },{
        type: 'array',
        max: 999,
        message: '最多选择 999 个分类',
        trigger: 'change'
      }
    ]
  },
  transfer: {
    type: 'transfer',
    name: 'transfer_route',
    label: "选择穿梭框",
    value: [1],
    placeholder: "请选择选择穿梭框",
    filterable: true,
    data: [],
    rule: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: '请选择',
        trigger: 'change'
      },{
        type: 'array',
        max: 999,
        message: '最多选择 999 个',
        trigger: 'change'
      }
    ]
  },
  color: {
    type: 'color',
    name: 'pick_color',
    value: "",
    label: "选择颜色",
    disabled: false,
    editable: true,
    alpha: false,
    hue: true,
    recommend: true,
    colors: [],
    rule: [
      {
        required: true,
        message: '请选择颜色',
        trigger: 'change'
      }
    ]
  },
  rate: {
    type: 'rate',
    name: 'pick_rate',
    value: 0,
    label: "选择评分",
    disabled: false,
    character: '',
    icon: '',
    rule: [
      {
        required: true,
        type: 'number',
        message: '请选择评分',
        min: 0.5,
        max: 5,
        trigger: 'change'
      }
    ]
  },
  date: {
    type: 'date',
    name: 'date_picker',
    label: "选择日期",
    value: '2019-12-02',
    placeholder: "请选择日期",
    placement: "bottom-start",
    clearable: true,
    disabled: false,
    editable: true,
    transfer: false,
    // options: {
    //   disabledDate (date) {
    //     return date && date.valueOf() < Date.now() - 86400000;
    //   }
    // },
    'show-week-numbers': false,
    confirm: false,
    rule: {
      required: true,
      message: '请选择日期',
      trigger: 'change'
    }
  },
  datetime: {
    type: 'datetime',
    name: 'datetime_picker',
    label: "选择时间",
    value: '2019-12-08 00:00:00',
    placeholder: "请选择时间",
    placement: "bottom-start",
    rule: {
      required: true,
      message: '请选择时间',
      trigger: 'change'
    }
  },
  daterange: {
    type: 'daterange',
    name: 'daterange_picker',
    label: "选择日期区间",
    value: [],
    placeholder: "请选择日期区间",
    clearable: true,
    rule: [
      {
        required: true,
        type: 'array',
        min: 2,
        message: '请选择日期区间',
        trigger: 'change'
      },{
        type: 'array',
        max: 2,
        message: '请选择日期区间',
        trigger: 'change'
      }
    ]
  },
  datetimerange: {
    type: 'datetimerange',
    name: 'datetimerange_picker',
    label: "选择日期时间区间",
    value: [],
    placeholder: "请选择日期时间区间",
    clearable: true,
    'on-change': (date) => {
      console.log(date)
    },
    rule: [
      {
        required: true,
        type: 'array',
        min: 2,
        message: '请选择日期时间区间',
        trigger: 'change'
      },{
        type: 'array',
        max: 2,
        message: '请选择日期时间区间',
        trigger: 'change'
      }
    ]
  },
  time: {
    type: 'time',
    name: 'time_picker',
    label: "选择时间",
    value: '',
    format: 'HH:mm:ss',
    placeholder: "请选择时间",
    steps: [1, 20],
    'disabled-hours': [],
    'disabled-minutes': [],
    'disabled-seconds': [],
    'hide-disabled-options': false,
    confirm: false,
    placement: "bottom-start",
    rule: {
      required: true,
      message: '请选择时间',
      trigger: 'change'
    }
  },
  timerange: {
    type: 'timerange',
    name: 'timerange_picker',
    label: "选择时间区间",
    value: [],
    placeholder: "请选择时间区间",
    clearable: true,
    rule: [
      {
        required: true,
        type: 'array',
        min: 2,
        message: '请选择时间区间',
        trigger: 'change'
      },{
        type: 'array',
        max: 2,
        message: '请选择时间区间',
        trigger: 'change'
      }
    ]
  },
  cascader: {
    type: 'cascader',
    name: 'cascader',
    label: "级联列表",
    value: [],
    placeholder: "请选择级联列表",
    filterable: true,
    clearable: true,
    // disabled: true,
    "change-on-select": true,
    data: [],
    rule: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: '请选择路由',
        trigger: 'change'
      },{
        type: 'array',
        max: 3,
        message: '最多选择三个路由',
        trigger: 'change'
      }
    ]
  }
}


export const defRules = {
  markdown: {
    required: true,
    message: 'markdown 不能为空',
    trigger: 'blur'
  },
  editor: {
    required: true,
    message: '详情不能为空',
    trigger: 'blur'
  },
  upload: {
    required: true,
    message: '请上传封面',
    trigger: 'blur'
  },
  'upload-album': [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '请上传详情',
      trigger: 'change'
    },{
      type: 'array',
      max: 9,
      message: '最多上传九张图片',
      trigger: 'change'
    }
  ],
  'upload-detail': [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '请上传详情',
      trigger: 'change'
    },{
      type: 'array',
      max: 9,
      message: '最多上传九张图片',
      trigger: 'change'
    }
  ],
  search: {
    required: true,
    message: '搜索关键字不能为空',
    trigger: 'blur'
  },
  text: {
    required: true,
    message: '名称不能为空',
    trigger: 'blur'
  },
  number: {
    required: true,
    message: '请输入正确的',
    min: 1,
    max: 100,
    trigger: 'blur',
    type: 'number'
  },
  email: [{
      required: true,
      message: '邮箱不能为空',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: 'blur'
    }
  ],
  password: {
    required: true,
    message: '请输入正确的密码格式',
    min: 6,
    max: 16,
    trigger: 'blur'
  },
  password_confirmation: {
    required: true,
    message: '请输入正确的密码格式',
    min: 6,
    max: 16,
    trigger: 'blur'
  },
  textarea: {
    required: true,
    message: '描述内容不能为空',
    trigger: 'blur'
  },
  radio: {
    required: true,
    message: '请选择状态',
    trigger: 'change'
  },
  checkbox: [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '请选择兴趣',
      trigger: 'change'
    },{
      type: 'array',
      max: 999,
      message: '最多选择 999 个兴趣',
      trigger: 'change'
    }
  ],
  'checkbox-only': {
    required: true,
    type: 'number',
    min: 1,
    message: '必须选中复选框',
    trigger: 'change'
  },
  switch: {
    required: true,
    type: 'number',
    min: 1,
    message: '必须开启开关',
    trigger: 'change'
  },
  select: {
    required: true,
    message: '请选择分类',
    trigger: 'change'
  },
  'select-mult': [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '请选择多选分类',
      trigger: 'change'
    },{
      type: 'array',
      max: 999,
      message: '最多选择 999 个分类',
      trigger: 'change'
    }
  ],
  transfer: [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '请选择',
      trigger: 'change'
    },{
      type: 'array',
      max: 999,
      message: '最多选择 999 个',
      trigger: 'change'
    }
  ],
  color: {
    required: true,
    message: '请选择颜色',
    trigger: 'change'
  },
  rate: {
    required: true,
    type: 'number',
    message: '请选择评分',
    min: 0.5,
    max: 5,
    trigger: 'change'
  },
  date: {
    required: true,
    message: '请选择日期',
    trigger: 'change'
  },
  datetime: {
    required: true,
    message: '请选择时间',
    trigger: 'change'
  },
  daterange: [
    {
      required: true,
      type: 'array',
      min: 2,
      message: '请选择日期区间',
      trigger: 'change'
    },{
      type: 'array',
      max: 2,
      message: '请选择日期区间',
      trigger: 'change'
    }
  ],
  datetimerange: [
    {
      required: true,
      type: 'array',
      min: 2,
      message: '请选择日期时间区间',
      trigger: 'change'
    },{
      type: 'array',
      max: 2,
      message: '请选择日期时间区间',
      trigger: 'change'
    }
  ],
  time: {
    required: true,
    message: '请选择时间',
    trigger: 'change'
  },
  timerange: [
    {
      required: true,
      type: 'array',
      min: 2,
      message: '请选择时间区间',
      trigger: 'change'
    },{
      type: 'array',
      max: 2,
      message: '请选择时间区间',
      trigger: 'change'
    }
  ],
  cascader: [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '请选择路由',
      trigger: 'change'
    },{
      type: 'array',
      max: 3,
      message: '最多选择三个路由',
      trigger: 'change'
    }
  ]
}
