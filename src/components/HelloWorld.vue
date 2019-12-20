<template>
  <div class="lists">
<!-- <Tag type="dot" checkable color="default">标签四</Tag> -->
<!-- <Tag type="dot" checkable color="primary">标签一</Tag> -->
    <!-- <sm-upload
      :multiple="true"
      mul-type="detail"
      filename="FileContent"
      width="373px"
      height="70px"
      >

      <div slot="mul-custom" slot-scope="{uploadList}">

        <img v-for="item in uploadList" :src="item.url + '?x-oss-process=image/resize,m_fill,h_100,w_100'">
      </div>
    </sm-upload> -->

    <!-- <sm-tags
      ref="smTags"
      :value="myTags"
      :tags="tags"
      >
    </sm-tags> -->


    <sm-form ref="smForm" v-model="formVals" :form="form" :fields="formFields">
      <Icon slot="password-prefix" type="md-lock" />
      <Icon slot="category_group-prefix" type="md-lock" />

      <Icon slot="switch-open" type="md-unlock" />
      <Icon slot="switch-close" type="md-lock" />

      <template slot="pick_rate-rate" slot-scope="{ rate }">
        <span v-if="rate <= 1">差评</span>
        <span v-else-if="rate > 1 && rate <= 4">中评</span>
        <span v-else-if="rate > 4">好评</span>
      </template>

      <template slot="custom_field-custom" slot-scope="{ value, field }">
        {{ value }}
      </template>
    </sm-form>

    <br>
    <!-- <sm-list ref="listTable" :listConf="listConf" @select="selectRow" @searchReset="searchReset" @export="exportData">
      <template slot="formItem" >
        <Form-item prop="title">
          <Input type="text" v-model="listConf.searchParams.title" placeholder="搜索文章名称" ></Input>
        </Form-item>
      </template>
      <template slot="formBtn">
        <Button type="primary" @click="jumpPage({ path: '/articleManage/articles/add' })"><Icon type="plus-round"></Icon>文章添加</Button>
      </template>

      <template slot="cat_name" slot-scope="{ row, index }">
        <span style="color: #ff00ff">{{row.cat_name + "-" + index}}</span>
      </template>

      <template slot="expand" slot-scope="{ row, index }">
        <span style="color: #ff00ff">basdfasdf</span>
      </template>
    </sm-list> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tags: [
        {name: '标签一'},
        {name: '标签二'},
        {name: '标签三'},
        {name: '标签四'},
      ],
      myTags: [
        "标签一", "标签wu"
      ],
      form: {
        inline: false,
      },
      formVals: {
        name: '',
        mytags: []
      },
      formFields: [
        // {
        //   type: 'markdown',
        //   name: 'markdown',
        //   value: "## 这是markdown 测试内容",        // 默认值
        //   label: "markdown 笔记",
        //   // 'on-change': function (html, text) {
        //   //   console.log(html)
        //   //   console.log(text)
        //   // },
        //   required: true
        // },
        // {
        //   type: 'editor',
        //   name: 'editor',
        //   value: "<p>这是测试内容</p>",        // 默认值
        //   label: "详情",
        //   required: {
        //     message: '请认真填写详情信息'
        //   }
        // },
        // {
        //   type: "switch",
        //   name: 'is_charge',
        //   label: '开关',
        // },
        {
          type: 'upload-album',
          name: 'images-album',
          value: [
            "https://img.love.zhaotongye.com/defaults/20191209/IKPaw6cweegkC03sb3OTIs1F4qLUQyQssCCuIaFm.png",
            "https://img.love.zhaotongye.com/defaults/20191209/IKPaw6cweegkC03sb3OTIs1F4qLUQyQssCCuIaFm.png",
          ],        // 默认值
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
              max: 2,
              message: '最多上传两张图片',
              trigger: 'change'
            }
          ]
        },
        {
          type: "tags",
          name: 'mytags',
          value: [],
          required: true,
          tags: [
            {name: '标签一'},
            {name: '标签二'},
            {name: '标签三'},
            {name: '标签四'},
            {name: '标签五'},
            {name: '标签六'},
            {name: '标签七'},
            {name: '标签八'},
          ]
        },
        {
          type: "text",
          name: 'name',
          value: '',
          label: '姓名',
          required: {
            message: '请输入姓名'
          }
        },
        {
          type: "switch",
          name: 'is_charge',
          label: '开关',
        },
        {
          type: "group",
          name: 'group',
          label: '内联表单',
          showFun: (field, formVal) => {
            return formVal['is_charge'] == 0 ? true : false
          },
          children: [
            {
              type: "email",
              name: 'my_email',
              label: '开关',
            },
            {
              type: "text",
              name: 'small_name',
              value: '',
              label: '内联姓名',
              required: {
                message: '请输入内联姓名'
              },
              // showIf: 'is_charge',
            },
          ]
        },
        // {
        //   type: "custom",
        //   name: 'custom_field',
        //   value: '自定义',
        //   label: '自定义字段'
        // }
      ],

      formFieldsOld: [
        {
          type: 'markdown',
          name: 'markdown',
          value: "## 这是markdown 测试内容",        // 默认值
          label: "markdown 笔记",
          'on-change': function (html, text) {
            console.log(html)
            console.log(text)
          },
          required: true,
          rule: {
            required: true,
            message: 'markdown 不能为空',
            trigger: 'blur'
          }
        },
        {
          type: 'editor',
          name: 'editor',
          value: "<p>这是测试内容</p>",        // 默认值
          label: "详情",
          'on-change': function (html, text) {
            console.log(html)
            console.log(text)
          },
          rule: {
            required: true,
            message: '详情不能为空',
            trigger: 'blur'
          }
        },
        {
          type: 'upload',
          name: 'image',
          value: "https://img.love.zhaotongye.com/defaults/20191209/IKPaw6cweegkC03sb3OTIs1F4qLUQyQssCCuIaFm.png",        // 默认值
          label: "上传封面",
          width: "375px",
          height: "70px",
          noEdit: true
        },
        {
          type: 'upload',
          name: 'image',
          value: "https://img.love.zhaotongye.com/defaults/20191209/IKPaw6cweegkC03sb3OTIs1F4qLUQyQssCCuIaFm.png",        // 默认值
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
        {
          type: 'upload-album',
          name: 'images-album',
          value: [
            "https://img.love.zhaotongye.com/defaults/20191209/IKPaw6cweegkC03sb3OTIs1F4qLUQyQssCCuIaFm.png",
            "https://img.love.zhaotongye.com/defaults/20191209/IKPaw6cweegkC03sb3OTIs1F4qLUQyQssCCuIaFm.png",
          ],        // 默认值
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
              max: 2,
              message: '最多上传两张图片',
              trigger: 'change'
            }
          ]
        },
        {
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
              max: 2,
              message: '最多上传两张图片',
              trigger: 'change'
            }
          ]
        },
        {
          type: 'search',
          name: 'keyword',
          value: "关键字",
          label: "搜索",
          placeholder: "请输入关键字",
          // "enter-button": true,    // 显示搜索图标，如果没有该选项，则只显示 搜索图标，没有按钮
          "enter-button": "搜索",
          readonly: false,
          disabled: false,
        },
        {
          type: 'text',
          name: 'name',
          value: "asdf",
          label: "姓名",
          maxlength: 30,
          placeholder: "请输入姓名",
          readonly: false,
          disabled: false,
          prefix: "ios-contact",
          suffix: "ios-search",
          'on-change': function (event) {
            console.log(event)
          },
          rule: {
            required: true,
            message: '姓名不能为空',
            trigger: 'blur'
          }
        },
        {
          type: 'number',
          name: 'age',
          value: 0.01,
          label: "年龄",
          placeholder: "请输入年龄",
          rule: {
            required: true,
            message: '请输入正确的年龄',
            min: 0.01,
            max: 100,
            trigger: 'blur',
            type: 'number'
          }
        },
        {
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
        {
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
        {
          type: 'textarea',
          name: 'info',
          value: "asdf",
          label: "描述",
          rows: 4,
          autosize: { minRows: 4, maxRows: 6 },
          maxlength: 200,
          'show-word-limit': true,
          placeholder: "请输入描述",
          readonly: false,
          disabled: false,
        },
        {
          type: 'radio',
          name: 'status',
          label: "状态",
          // value: -1,    // 和下面的类型要对应
          group: {
            // type: 'button',
            vertical: true,
          },
          radios: [
            {label: "未审核", value: 0, border: true},
            {label: "已审核", value: 1, border: false},
            {label: "已驳回", value: -1, border: true}
          ],
          rule: {       // 如果没有，rule 不验证
            required: true,
            message: '请选择状态',
            trigger: 'change'
          }
        },
        {
          type: 'checkbox',
          name: 'interest',
          label: "兴趣",
          value: [],
          checkboxs: [
            {label: "打球", value: "boll", border: true},
            {label: "玩游戏", value: "gaming", border: false},
            {label: "睡觉", value: "sleep", border: true}
          ],
          'on-change': (val) => {
            console.log(val)
          },
          rule: [
            {
              required: true,
              type: 'array',
              min: 1,
              message: '请选择兴趣',
              trigger: 'change'
            },{
              type: 'array',
              max: 2,
              message: '最多选择两个兴趣',
              trigger: 'change'
            }
          ]
        },
        {
          type: 'checkbox-only',
          name: 'is_onsale',
          label: "上架",
          value: 1,
          disabled: false,
          'on-change': (val) => {
            console.log('--------')
            console.log(val)
          },
          rule: {
            required: true,
            type: 'number',
            min: 1,
            message: '必须选中复选框',
            trigger: 'change'
          }
        },
        {
          type: 'switch',
          name: 'switch',
          label: "开关",
          value: 1,
          disabled: false,
          'true-color': "#c71e1e",
          'false-color': "#8e8787",
          'before-change': function () {
            return new Promise((resolve, reject) => {
              this.$Modal.confirm({
                title: '切换确认',
                content: '您确认要切换开关状态吗？',
                onOk: () => {
                  resolve();
                },
                onCancel: () => {
                  reject('取消了')
                }
              });
            });
          },
          rule: {
            required: true,
            type: 'number',
            min: 1,
            message: '必须开启开关',
            trigger: 'change'
          }
        },
        {
          type: 'select',
          name: 'category',
          label: "分类",
          value: '1',
          placeholder: "请选择分类",
          disabled: false,
          clearable: true,
          options: [
            {label: "打球", value: '1', disabled: false},
            {label: "打游戏", value: '2', disabled: false},
          ],
          rule: {
            required: true,
            message: '请选择分类',
            trigger: 'change'
          }
        },
        {
          type: 'select',
          name: 'category_group',
          label: "分类分组",
          value: 1,
          placeholder: "请选择分类",
          filterable: true,
          prefix: 'md-lock',
          'not-found-text': "没有匹配结果",
          disabled: false,
          clearable: true,
          optionGroups: [
            {
              label: '球类',
              options: [
                {label: "篮球", value: 1, disabled: false},
                {label: "排球", value: 2, disabled: false},
                {label: "乒乓球", value: 3, disabled: true}
              ]
            },
            {
              label: '游戏类',
              options: [
                {label: "英雄联盟", value: 4, disabled: false},
                {label: "王者荣耀", value: 5, disabled: false},
                {label: "吃鸡", value: 6, disabled: true}
              ]
            }
          ],
          rule: {
            required: true,
            type: 'number',
            min: 1,
            message: '请选择分类',
            trigger: 'change'
          }
        },
        {
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
          optionGroups: [
            {
              label: '球类',
              options: [
                {label: "篮球", value: 1, disabled: false},
                {label: "排球", value: 2, disabled: false},
                {label: "乒乓球", value: 3, disabled: true}
              ]
            },
            {
              label: '游戏类',
              options: [
                {label: "英雄联盟", value: 4, disabled: false},
                {label: "王者荣耀", value: 5, disabled: false},
                {label: "吃鸡", value: 6, disabled: true}
              ]
            }
          ],
          rule: [
            {
              required: true,
              type: 'array',
              min: 1,
              message: '请选择多选分类',
              trigger: 'change'
            },{
              type: 'array',
              max: 3,
              message: '最多选择三个分类',
              trigger: 'change'
            }
          ]
        },
        {
          type: 'transfer',
          name: 'transfer_route',
          label: "选择路由",
          value: [1],
          placeholder: "请选择路由",
          filterable: true,
          data: [
            { "key": 1, "label": "Content 1", "disabled": false },
            { "key": 2, "label": "Content 2", "disabled": true },
            { "key": 3, "label": "Content 3", "disabled": false },
            { "key": 4, "label": "Content 4", "disabled": false },
            { "key": 5, "label": "Content 5", "disabled": false },
            { "key": 6, "label": "Content 6", "disabled": false }
          ],
          'on-change': (targetKeys, direction, moveKeys) => {
            console.log(targetKeys)
            console.log(direction)
            console.log(moveKeys)
          },
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
        },
        {
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
        {
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
        {
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
          options: {
            disabledDate (date) {
              return date && date.valueOf() < Date.now() - 86400000;
            }
          },
          'show-week-numbers': false,
          // 'start-date': new Date(2018, 12, 8),
          confirm: false,
          rule: {
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        },
        {
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
        {
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
        {
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
        {
          type: 'time',
          name: 'time_picker',
          label: "选择时间",
          value: '12:23:00',
          format: 'HH:mm:ss',
          placeholder: "请选择时间",
          steps: [1, 20],
          'disabled-hours': [1, 3],
          'disabled-minutes': [1, 50],
          'disabled-seconds': [15, 45],
          'hide-disabled-options': true,
          confirm: false,
          placement: "bottom-start",
          rule: {
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        },
        {
          type: 'timerange',
          name: 'timerange_picker',
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
        {
          type: 'cascader',
          name: 'cascader',
          label: "级联列表",
          value: ['beijing'],
          placeholder: "请选择级联列表",
          filterable: true,
          clearable: true,
          // disabled: true,
          "change-on-select": true,
          data: [{
              value: 'beijing',
              label: '北京',
              children: [
                {
                  value: 'gugong',
                  label: '故宫'
                },
                {
                  value: 'tiantan',
                  label: '天坛',
                  disabled: true,
                },
                {
                  value: 'wangfujing',
                  label: '王府井'
                }
              ]
            }, {
              value: 'jiangsu',
              label: '江苏',
              children: [{
                  value: 'nanjing',
                  label: '南京',
                  children: [
                    {
                      value: 'fuzimiao',
                      label: '夫子庙',
                    }
                  ]
                },
                {
                  value: 'suzhou',
                  label: '苏州',
                  children: [
                    {
                      value: 'zhuozhengyuan',
                      label: '拙政园',
                    },
                    {
                      value: 'shizilin',
                      label: '狮子林',
                    }
                  ]
                }
              ],
            }
          ],
          'on-change': (value, selectedData) => {
            console.log(value)
            console.log(selectedData)
          },
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
        },
      ],
      name: {
        name: "name",
        type: "text",
        readonly: true,
        disabled: true,
        placeholder: "请输入姓名",
        maxlength: 20,
        "show-word-limit": true,
        prefix: 'md-cog',
        suffix: 'md-cog',
        search: true,

      },
      formInline: {
        name: '',
        password: ''
      },
      ruleInline: {
          name: [
              { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
              { required: true, message: 'Please fill in the password.', trigger: 'blur' },
              { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
      },
      namevalue: "",
      listConf: {
        searchParams: {
        },
        item: [],
        columns: [
          // {type: 'expand', width: 30, align: 'center', fixed: 'left', render (h, params) {
          //   return h(expandRow, {
          //     props: {
          //       row: params.row
          //     }
          //   })
          // }},
          {type: 'selection', width: 60, align: 'center', fixed: 'left'},
          {type: 'index', align: 'center', width: 60, fixed: 'left'},
          {title: '标题', align: 'center', key: 'title', width: 80, sortable: true, resizable: true},
          {title: '头像', align: 'center', key: 'avatar', width: 80, slot: "avatar", column_type: 'image', className: "columns-image"},
          {title: '产品图', align: 'center', key: 'images', width: 140, slot: "images", column_type: 'images', className: "columns-image"},
          {title: '分类', key: 'cat_name', width: 120, slot: "cat_name", editable: true },
          {title: '标识类型', align: 'center', key: 'code_name', slot: "code_name", editable: true},
          {title: '浏览量', align: 'center', key: 'view_num'},
          {title: '添加时间', align: 'center', key: 'created_at'},
          {title: '操作',
            key: 'action',
            align: 'center',
            width: 150,
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'md-brush'
                  },
                  style: {
                    marginRight: '5px',
                    marginBottom: '5px'
                  },
                  on: {
                    click: () => {
                      var id = params.row.id
                      this.jumpPage('/articleManage/articles/edit/' + id)
                    }
                  }
                }),
              ])
            }
          }
        ],
        data: [
          {
            title: "标题1",
            avatar: "https://file.duduapp.net/2/2019/10/21/f89c45db40cfdc4f3a2c5e5071098071.jpg?x-oss-process=image/resize,w_600",
            images: [
              "https://file.duduapp.net/2/2019/10/21/f89c45db40cfdc4f3a2c5e5071098071.jpg?x-oss-process=image/resize,w_600",
              "https://file.duduapp.net/2/2019/10/21/e0a2c54f52029e0737bf5b1077c85b9d.jpg?x-oss-process=image/resize,w_600"
            ],
            cat_name: "category 1",
            code_name: "index",
            view_num: 123,
            created_at: "2019-10-24 12:35:12"
          },
          {
            title: "标题2",
            avatar: "https://file.duduapp.net/2/2019/10/21/e0a2c54f52029e0737bf5b1077c85b9d.jpg?x-oss-process=image/resize,w_600",
            images: [
              "https://file.duduapp.net/2/2019/10/21/f89c45db40cfdc4f3a2c5e5071098071.jpg?x-oss-process=image/resize,w_600",
              "https://file.duduapp.net/2/2019/10/21/e0a2c54f52029e0737bf5b1077c85b9d.jpg?x-oss-process=image/resize,w_600"
            ],
            cat_name: "category 2",
            code_name: "nav",
            view_num: 456,
            created_at: "2019-10-24 18:35:12"
          },
        ]
      },
    }
  },
  methods: {
    selectRow: function (index) {
      this.currentRow = index
    },
    searchReset: function (originParams) {
      this.listConf.searchParams = Util.extend(this.listConf.searchParams, originParams)
    },
    jumpPage: function (path) {
      this.$router.push(path)
    },
    deleteConf: function (id) {
      var _this = this
      _this.$Modal.confirm({
        title: '提示',
        content: '确定删除吗？删除之后不可恢复!',
        onOk: function () {
          _this.articleDel(id)
        },
        onCancel: function () {
          _this.$Notice.error({ title: '提示', desc: '操作取消' })
        }
      })
    },
    articleDel (id) {
      var _this = this
      Util.ajax({
        url: '/adminapi/articles/' + id,
        method: 'DELETE',
        success: function (result) {
          if (result.error == 0) {
            _this.$Notice.success({ title: '提示', desc: '删除成功' })
            _this.$refs.listTable.listLoad()
          } else {
            _this.$Notice.error({ title: '提示', desc: result.info })
          }
        }
      })
    },
    setStatus (id, status) {
      var _this = this

      Util.ajax({
        url: '/adminapi/articles/' + id + '/setStatus',
        method: 'patch',
        data: {status: status},
        success: function (result) {
          if (result.error == 0) {
            _this.$Notice.success({title: '提示', desc: '操作成功'})
            _this.$refs.listTable.listLoad()
          } else {
            _this.$Notice.error({title: '提示', desc: result.info})
          }
        }
      })
    },
    exportData: function ({isAll}) {
      this.$refs.listTable.exportCsv({
        isAll: isAll,
        columnsCB: function (item, index, columns) {
          return index > 0;
        },
        dataCB: function (item, index, data) {
          // item.customername = item.customer ? item.customer.name + '-' + item.customer.phone : '';
          // item.productname = item.product ? item.product.name : '';
          // item.type_name = item.commission_rule ? item.commission_rule.type_name : '';
          // item.standard = item.commission_rule ? item.commission_rule.standard : '';

          return item;
        },
      });
    }
  },
  watch: {
    myTags(val) {
      console.log(val)
    }
  },
  mounted () {
    // this.$smUtil.test();
    setTimeout(() => {
      // this.formVals['mytags'] = [];
      this.formVals['mytags'].push('标签五');

      // this.formFields[0]['value'] = '> 這是新的内容'
      // this.$set(this.formFields, 0, this.formFields[0]);

      // this.formFields[19]['value'] = [3,4]
      // this.$set(this.formFields, 19, this.formFields[19]);
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
