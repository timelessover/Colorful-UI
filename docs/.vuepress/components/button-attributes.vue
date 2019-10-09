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
              <td>icon</td>
              <td class="des">图标类名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>iconPosition</td>
              <td class="des">图标位置</td>
              <td class="type">String</td>
              <td>left / right</td>
              <td>left</td>
            </tr>
            <tr>
              <td>size</td>
              <td class="des">尺寸</td>
              <td class="type">string</td>
              <td>normal / large / small</td>
              <td>false</td>
            </tr>
            <tr>
              <td>type</td>
              <td class="des">类型</td>
              <td class="type">string</td>
              <td>default / primary / success  / danger</td>
              <td></td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">是否加载中状态</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td class="des">是否禁用状态</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
             <tr>
              <td>native-type</td>
              <td class="des">原生 type 属性</td>
              <td class="type">Boolean</td>
              <td>button / submit / reset</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
