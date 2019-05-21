<style lang="scss">
.v-layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: absolute;
    border-radius: 4px;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
}
</style>
<template>
    <Layout class="v-layout">
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout>
            <Sider hide-trigger :style="{ background: '#fff' }">
                <Menu theme="light" width="auto" :accordion="true">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>帐号管理
                        </template>
                        <MenuItem name="1-1" to="/">用户管理</MenuItem>
                        <MenuItem name="1-2">角色管理</MenuItem>
                        <MenuItem name="1-3">权限管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>Rocket
                        </template>
                        <MenuItem name="2-1" to="/rocket/table">
                            Table
                        </MenuItem>
                        <MenuItem name="2-2" to="/rocket/toolbar">
                            Toolbar
                        </MenuItem>
                        <MenuItem name="2-3" to="/rocket/curd">
                            Curd
                        </MenuItem>
                        <MenuItem name="2-4" to="/rocket/form">
                            Form
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout
                :style="{
                    padding: '0 10px 10px',
                    height: '100%',
                    overflowY: 'auto'
                }"
            >
                <router-view></router-view>
            </Layout>
        </Layout>
    </Layout>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {}
};
</script>
