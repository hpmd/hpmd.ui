# hpmd.ui

## О библиотеке:
HPMD.ui - Набор интерфейсов на основе Bootstrap 4 (и нескольких более мелких библиотек), сделанный для быстрого создания дэшбордов и подобных интерфейсов.
Библиотека включает:
- Набор CSS - в виде подключаемого SCSS файла с возможностью кастомизации до сборки
- Vue-компоненты (Vue 2): набор отдельных компонентов для использования в Vue-приложениях.

___

## Установка
**HTTPS:**
```
npm install git+https://github.com/hpmd/hpmd.ui.git
```

**SSH:**
```
npm install git+ssh://git@github.com/hpmd/hpmd.ui.git
```

___

## Подключение и использование
### Подключение библиотеки для глобального использования
```javascript
// main.js
import Vue from 'vue';
import { HpmdUI } from 'hpmd.ui';
import 'hpmd.ui/src/scss/hpmd.ui.scss';

// ...

Vue.use(HpmdUI);
```


### Подключение отдельных компонентов для глобального использования
```javascript
// main.js
import Vue from 'vue';
import {
    ButtonPlugin
    TablePlugin
} from 'hpmd.ui';
// import global scss
import 'hpmd.ui/src/scss/hpmd.ui.scss';

Vue.use(ButtonPlugin);
Vue.use(TablePlugin);
```


### Подключение отдельных компонентов для локального использования
```javascript
// MyComponent.js
import {
    HmButton,
    HmTable
} from 'hpmd.ui';

export default {
    components: {
        HmButton,
        HmTable
    }
};
```


### SCSS
SCSS можно подключить как глобально (предпочтительно при импорте библиотеки полностью):
```javascript
// main.js
import 'hpmd.ui/src/scss/hpmd.ui.scss';
```

так и отдельными модулями, для того чтобы сэкономить на весе итогового css-файла.
Обязательным для подключения является файл `base.scss` (основные переменные и функции Bootstrap)
```javascript
// main.js
import './path/to/your.scss';
```

```scss
@import '~hpmd.ui/src/scss/base';
@import '~hpmd.ui/src/scss/button';
@import '~hpmd.ui/src/scss/table';
```

___

## Компоненты
### Alert *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/alert) **Без изменений**

**Реализованные компоненты:**
* HmAlert

---

### Avatar

Component: **HmAvatar**
```javascript
// MyComponent.vue
<hm-avatar
    :src="imageURL"
    variant="danger"
    size="sm"
/>
```
**Свойства**
| Свойство | Тип    | По-умолчанию  | Допустимые значения     | Описание              |
|----------|--------|---------------|-------------------------|-----------------------|
| `size`   | String | 'md'          | xs, sm, md, lg          | Размер аватара        |
| `src`    | String | ''            |                         | URL изображения       |
| `variant`| String | 'secondary'   | Значения из цветов темы | Цвет подложки аватара |


**События**
| Событие          | Передаваемые данные | Описание                        |
|------------------|---------------------|---------------------------------|
| `imageLoadError` | Error Event data    | Данные из события image.onerror |

---

### Badge *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/badge) **Без изменений**

**Реализованные компоненты:**
* HmBadge

---

### Button *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/button) **Без изменений**

**Реализованные компоненты:**
* HmButton (HmBtn)
* HmButtonClose (HmBtnClose)

---

### Button Group *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/button-group) **Без изменений**

**Реализованные компоненты:**
* HmButtonGroup

---

### Calendar *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/calendar)

**Реализованные компоненты:**
* HmCalendar

**Добавленные свойства**
| Свойство      | Тип                   | По-умолчанию  | Допустимые значения                                               | Описание                 |
|---------------|-----------------------|---------------|-------------------------------------------------------------------|--------------------------|
| `isRange`     | Boolean               | false         |                                                                   | Выбрать диапазон дат     |
| `showYearBtns`| Boolean               | false         |                                                                   | Цвет подложки аватара    |
| `value`       | String, Date, Date[]  |               | строка в формате `YYYY-MM-DD`, объект даты или массив из двух дат | Изменяемое значение даты |

---

### Card *(Bootstrap Vue)
> **DEPRECATED**: use css classes instead

[Документация](https://bootstrap-vue.org/docs/components/card) **Без изменений**

**Реализованные компоненты:**
* HmCard

---

### Checkbox *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-checkbox) **Без изменений**

**Реализованные компоненты:**
* HmCheckbox
* HmCheckboxGroup

---

### Collapse *(Boostrap Vue)
> WARN: возможна переработка

[Документация](https://bootstrap-vue.org/docs/components/form-checkbox)

**Реализованные компоненты:**
* HmCollapse

**Добавленные свойства**
| Свойство    | Тип    | По-умолчанию  | Допустимые значения | Описание                                 |
|-------------|--------|---------------|---------------------|------------------------------------------|
| `buttonText`| String | ''            |                     | Текст кнопки, которая разворачивает блок |

---

### Datepicker *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-datepicker)

**Реализованные компоненты:**
* HmDatepicker

**Добавленные свойства**
| Свойство    | Тип     | По-умолчанию       | Допустимые значения | Описание                                 |
|-------------|---------|--------------------|---------------------|------------------------------------------|
| `range`     | Boolean | false              |                     | Выбрать диапазон дат                     |
| `useNative` | Boolean | (Detect mobile OS) |                     | Использовать нативный ввод даты (input type="date") |

---

### Dropdown *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/dropdown) **Без изменений**

**Реализованные компоненты:**
* HmDropdown
* HmDropdownItemButton
* HmDropdownDivider
* HmDropdownItem

---

### File Input *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-file)

**Реализованные компоненты:**
* HmFileInput

---

### Form *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form) **Без изменений**

[Документация Form Group](https://bootstrap-vue.org/docs/components/form-group) **Без изменений**

**Реализованные компоненты:**
* HmForm
* HmFormDatalist
* HmFormGroup
* HmFormInvalidFeedback
* HmFormText
* HmFormValidFeedback

---

### Icon
Компонент для отрисовки SVG-иконок в тексте или любых блоках. 
Основной случай использования - монохромные иконки для элементов интерфейса.

#### Регистрация (добавление) иконок

Для того чтобы размер приложения не страдал от кучи неиспользуемых иконов, все иконки добавляются вручную.
Есть два варианта добавления (регистрации) иконок:

**$hmIcon.add() - При установке глобально**
```javascript
// MyComponent.vue

export default {
    created() {
        this.$hmIcon.add(iconObject);
    }
}
```

**HmIcon.add() - При импорте компонента**
```javascript
// MyComponent.vue
import { HmIcon } from 'hpmd.ui';
HmIcon.add(iconObject);
```

В обоих случаях новая иконка будет доступна для всего приложения (т.е. не обязательно добавлять ее в каждом месте, где она будет использоваться)

#### Размеры и стили

Размер иконки равен размеру текста блока-родителя (1em). Для установки отличного от текста размера заверните иконку в контейнер и проставьте `font-size`.

Цвет иконки по-умолчанию равен цвету текста - это довольно удобно для мягких переходов при hover-эффектах, например, кнопок. При желании можно указать свой собственный цвет через свойство `fill`.

#### Добавление новых иконок

Можно (и часто нужно) подключать свои иконки. Формат следующий:
```javascript
export {
    "name": "sort",
    "style": "line",
    "width": 24,
    "height": 24,
    "content": "<path d=\"M16.29,14.29,12,18.59l-4.29-4.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0-1.42-1.42ZM7.71,9.71,12,5.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-5-5a1,1,0,0,0-1.42,0l-5,5A1,1,0,0,0,7.71,9.71Z\"/>"
}
```

#### Добавленные компоненты:
Component: **HmAvatar**
```javascript
import { HmIcon } from 'hpmd.ui';
import { uniTimes } from 'hpmd.ui/src/assets/icons/unicons';

HmIcon.add(uniTimes)
// MyComponent.vue
<hm-icon
    name="times"
    fill="#990000"
/>
```

**Свойства**
| Свойство    | Тип     | По-умолчанию       | Допустимые значения | Описание                                 |
|-------------|---------|--------------------|---------------------|------------------------------------------|
| `fill`      | String  | 'currentColor'     |                     | Цвет иконки, по-умолчанию - цвет текста родительского элемента |
| `name`      | String  | ''                 |                     | Имя иконки, определенное в Icon.name     |

___

### Input *(BootstrapVue)
[Документация](https://bootstrap-vue.org/docs/components/form-input)

**Реализованные компоненты**
* HmInput

Основное изменение - компонент завернут в контейнер для того, чтобы сопутствующие вводу элементы интерфейса можно было выводить прямо в нем (кнопки, лэйбл)

**Добавленные свойства**
| Свойство          | Тип     | По-умолчанию | Допустимые значения | Описание                                 |
|-------------------|---------|--------------|---------------------|------------------------------------------|
| `label`           | String? | ''           |                     | Текст лэйбла над полем ввода: рекомендуется использовать отдельно от placeholder, либо описать свои стили для placeholder, чтобы избежать визуального наложения |
| `mask`            | IMask   | undefined    | IMask instance      | Маска ввода для текстовых полей: [документация IMask](https://imask.js.org/guide.html), [Документация Vue IMask](https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask)     |
| `showClearBtn`    | Boolean | true         |                     | Показывать кнопку очистки поля ввода     |
| `showPasswordBtn` | Boolean | false        |                     | Показывать кнопку "показать ввод" для `type="password"` |


**Добавленные события**
| Событие    | Передаваемые данные                    | Описание                        |
|------------|----------------------------------------|---------------------------------|
| `accept`   | IMask Accept event data                | Событие отправляется каждый раз когда меняется значение маски при вводе. Практической ценности не имеет, добавлено в большей степени для дебага |
| `complete` | IMask Complete event data              | Событие отправляется когда маска ввода заполнена |
| `inputRaw` | Imask.AcceptEvent.detail.unmaskedValue | Сырой ввод пользователя в поле с маской - может быть нужно для получения неформатированного значения (например, номера телефона в виде `+79998887766`, а не `+7 (999) 888-77-66`) |


**Добавленные слоты**
| Имя слота | Описание                                               |
| `append`  | Слот для вывода элементов после (справа от) поля ввода |
| `prepend` | Слот для вывода элементов перед (слева от) полем ввода |


### Input Group *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/input-group) **Без изменений**

**Реализованные компоненты:**
* HmInputGroup
* HmInputGroupAddon
* HmInputGroupAppend
* HmInputGroupPrepend
* HmInputGroupText


### Modal *(Bootstrap Vue)
> WARN: в плане добавить для компонента возможность выводить его на полный экран (`size = "fs"`).
[Документация](https://bootstrap-vue.org/docs/components/modal) **Без изменений**

**Реализованные компоненты:**
* HmModal


### Nav *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/nav) **Без изменений**

**Реализованные компоненты**
* HmNav
* HmNavItem
* HmNavItemDropdown
* HmNavText


### Popover *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/popover) **Без изменений**

**Реализованные компоненты:**
* HmPopover


### Progress *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/progress) **Без изменений**

**Реализованные компоненты:**
* HmProgress


### Radio *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-radio) **Без изменений**

**Реализованные компоненты:**
* HmRadio
* HmRadioGroup


### Range Slider *(Vue Slider Component)
[Документация](https://nightcatsama.github.io/vue-slider-component) **Без изменений**

**Реализованные компоненты**
* HmRangeSlider


### Select *(Vue Multiselect)
[Документация](https://vue-multiselect.js.org/) **Без изменений**

**Реализованные компоненты**
* HmSelect


### Selector
> DEPRECATED: компонент ждет неминуемый рефакторинг (скорее всего весь функционал будет вынесен в Radio и Checkbox), старайтесь пока избегать его использования

Компоненты для реализации чекбоксов в виде набора "кнопок"

**Реализованные компоненты**
* HmSelector
* HmSelectorEl


### Spin Button *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-spinbutton) **Без изменений**

**Реализованные компоненты**
* HmSpinButton


### Table *(Bootstrap Vue)
[Документация](https://bootstrap-vue.org/docs/components/form-table) **Без изменений**

**Реализованные компоненты**
* HmTable
* HmTableLite
* HmTableSimple
* HmTbody
* HmThead
* HmTfoot
* HmTr
* HmTd
* HmTh


### Tip
Компонент для вывода блока (например слова или заголовка) с подсказкой

**Реализованные компоненты**
#### HmTip
| Свойство              | Тип     | По-умолчанию | Допустимые значения | Описание                                 |
| `iconName`            | String | `'info-circle'` | Icon.name зарегистрированной иконки | Иконка подсказки |
| `iconPosition`        | String | `'center'` | left, center, right | Положение иконки в кружке (по-горизонтали) |
| `iconVariant`         | String | `primary` | Название цвета из $theme-colors | Цвет иконки |
| `inText`              | Boolean | `false` |    | Подсказка внутри текста (на слове) |
| `tip`                 | String | `''` |       | Текст подсказки |
| `tooltipVariant`      | String | ``
| `tooltipPlacemenet`   |
| `triggers`            |



inText
tip
tooltipVariant
tooltipPlacemenet
triggers
iconPosition
iconName
iconVariant




___
___

## Разработка

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
