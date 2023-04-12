import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  DatePicker,
  Dialog,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Option,
  Pagination,
  Select,
  Submenu,
  Table,
  TableColumn,
  TimePicker,
  Tree,
  Upload
} from "element-ui";
import Vue from "vue";

Vue.use(Button);
Vue.use(Submenu);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Dialog);
Vue.use(Tree);
Vue.use(Upload);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;