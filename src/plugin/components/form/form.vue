<template>
  <div class="sm-form">
    <Form ref="formValidate" :inline="form.inline" :model="formVal" :rules="formRule" :label-width="80">
      <template v-for="field in currentFields">
        <FormItem v-show="showFormItem(field)" :label="field.label" :prop="field.name">
          <sm-field
            v-model="formVal[field.name]"
            :field="field"
            >
            <template :slot="field.name + '-prepend'">
              <slot :name="field.name + '-prepend'">
              </slot>
            </template>

            <template :slot="field.name + '-append'">
              <slot :name="field.name + '-append'">
              </slot>
            </template>

            <template :slot="field.name + '-prefix'">
              <slot :name="field.name + '-prefix'">
              </slot>
            </template>

            <template :slot="field.name + '-suffix'">
              <slot :name="field.name + '-suffix'">
              </slot>
            </template>

            <template v-if="field.type == 'switch'">
              <span :slot="field.name + '-open'">
                <slot :name="field.name + '-open'">
                </slot>
              </span>
              <span :slot="field.name + '-close'">
                <slot :name="field.name + '-close'">
                </slot>
              </span>
            </template>

            <template v-if="field.type == 'select' || field.type == 'select-mult'">
              <template :slot="field.name + '-option'">
                <slot :name="field.name + '-option'">

                </slot>
              </template>
            </template>

            <template v-if="field.type == 'rate'">
              <template :slot="field.name + '-rate'">
                <slot :name="field.name + '-rate'" :rate="formVal[field.name]">
                  <span style="color: #f5a623">{{ formVal[field.name] }}</span>
                </slot>
              </template>
            </template>
          </sm-field>
        </FormItem>
      </template>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import Util from '../../libs/util';
  import dateUtil from 'view-design/src/utils/date';
  import {defFields, defRules} from './field'

  export default {
    props: {
      form: {
        default: function () {
          return {};
        }
      },
      fields: {
        default: []
      },
    },
    data() {
      return {
        formVal: {}
      }
    },
    computed: {
      currentFields () {
        let newFields = [];
        let fields = this.fields;

        for (let field of fields) {
          let defField = (defFields[field.type] != undefined) ? defFields[field.type] : [];
          field = Util.extend(defFields[field.type], field);
          newFields.push(field);

          if (field.type == 'password' && (field.noconfirm == undefined || field.noconfirm == false)) {
            var confirmField = field;
            confirmField.name = confirmField.name + '_confirmation';
            confirmField.label = "确认" + confirmField.label;
            confirmField.placeholder = "请输入确认" + confirmField.label;
            newFields.push(confirmField);
          }
        }

        return fields;
      },
      formRule () {     // 验证规则
        let fields = this.currentFields;
        let formRule = {};
        for (let field of fields) {
          if (field.required == undefined && field.rule == undefined) {
            continue;
          }

          let defRule = (defRules[field.type] != undefined) ? defRules[field.type] : [];

          // 完全自定义 rule
          if (field.rule) {
            formRule[field.name] = Util.extend(defRule, field.rule);
            continue;
          }

          // 完全默认
          if (typeof field.required == 'boolean') {
            formRule[field.name] = defRule;
            continue;
          }

          // 简写模式，进行合并
          let required = field.required;
          if (typeof required == 'object') {
            for (var i in required) {
              // console.log('---------------')
              // console.log(typeof defRule)
              // console.log(defRule)

              // 如果是數組
              if (Array.isArray(defRule)) {
                defRule.filter((rule, index, defRule) => {
                  if (rule[i] != undefined) {
                    rule[i] = required[i];
                  }
                  return rule;
                })

                continue;
              }

              // 如果是對象
              if (typeof defRule == 'object') {
                if (defRule[i] != undefined) {
                  defRule[i] = required[i];
                }
                continue;
              }
            }
          }
          formRule[field.name] = defRule;
        }

        console.log(formRule);
        return formRule;
      }
    },
    watch: {
      fields () {
        this.setFormVal();
      }
    },
    methods: {
      setFormVal () {             // 初始化表单默认值
        let fields = this.fields;
        let formVal = {};
        for (let field of fields) {
          let defaultVal = this.setDefault(field.type);
          if (field.type == 'number' || field.type == 'color') {
            field.value = Number(field.value);
          }
          formVal[field.name] = field.value ? field.value : defaultVal;
          if (field.type == 'password') {
            formVal[field.name + "_confirmation"] = '';
          }
        }
        console.log(formVal);
        this.formVal = formVal;
      },
      setDefault (type) {       // 根据表单类型设置 默认值
        let defaultVal = '';
        switch(type) {
          case 'text':
          case 'color':
          case 'date':
          case 'datetime':
          case 'year':
          case 'month':
            defaultVal = '';
            break;
          case 'number':
          case 'rate':
          case 'checkbox-only':
          case 'switch':    // 同 checkbox-only
            defaultVal = 0;
            break;
          case 'checkbox':
          case 'select-mult':
          case 'transfer':
          case 'cascader':
          case 'daterange':
          case 'datetimerange':
            defaultVal = [];
            break;
        }

        return defaultVal;
      },
      showFormItem(field) {
        if (field.showFun) {
          return field.showFun(field, this.formVal);
        } else {
          return !field.showIf || (field.showIf && this.formVal[field.showIf]);
        }
      },
      handleSubmit(name) {
        console.log(this.formVal)
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset(name) {
        // this.$refs[name].resetFields();
      }
    },
    created () {
      console.log(this.fields);
      this.setFormVal();
    }
  };
</script>

<style scoped>
.sm-form {
    float: left;
}
</style>
