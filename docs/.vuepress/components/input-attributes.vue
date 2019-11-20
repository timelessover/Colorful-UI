<template>
  <div class="base">
    <section>
      <h2>Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td class="des">类型</td>
              <td class="type">string</td>
              <td>text，textarea</td>
              <td>text</td>
            </tr>
            <tr>
              <td>value / v-model</td>
              <td class="des">绑定值</td>
              <td class="type">string / number</td>
              <td>left / right</td>
              <td>left</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td class="des">输入框占位文本</td>
              <td class="type">string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td class="des">是否可清空</td>
              <td class="type">boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>show-password</td>
              <td class="des">是否显示切换密码图标</td>
              <td class="type">boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td class="des">是否禁用状态</td>
              <td class="type">boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
             <tr>
              <td>prefix-icon</td>
              <td class="des">输入框头部图标</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>suffix-icon</td>
              <td class="des">输入框尾部图标</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
             <tr>
              <td>readonly</td>
              <td class="des">原生属性，是否只读</td>
              <td class="type">boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
