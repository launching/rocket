<style lang="scss">
.v-layout {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &.ivu-layout {
        background: url("~@/assets/img/cover.jpg");
    }

    .ivu-layout {
        background: url("~@/assets/img/cover.jpg");
    }

    .layout-out {
        background: transparent;
    }
    .layout-logo {
        font-size: 30px;
        float: left;
        font-family: monospace;
        margin-left: 60px;
    }
    .layout-nav {
        float: left;
        margin-left: 50px;
    }

    .ivu-layout-header {
        background: transparent;
        box-shadow: 1px 0px 5px 5px #999;
        z-index: 1;
        height: 60px;
    }
    .ivu-menu-light {
        background: transparent;
    }
    .ivu-layout-sider {
        background: transparent;
    }
    .ivu-menu-light {
        &.ivu-menu-vertical {
            &.ivu-menu-light:after {
                content: none;
            }
            .ivu-menu-item:hover,
            .ivu-menu-submenu-title:hover {
                color: white;
                background: rgba(#000, 0.1);
            }
            .ivu-menu-item-active:not(.ivu-menu-submenu) {
                color: white;
                background: rgba(#000, 0.1);
                &:hover {
                    color: white;
                    background: rgba(#000, 0.1);
                }
                &:after {
                    content: none;
                }
            }
        }

        &.ivu-menu-horizontal {
            &:after {
                background: transparent;
            }

            .ivu-menu-item-active {
                color: white;
                border-bottom: none;
                background: rgba(#000, 0.1);
            }

            .ivu-menu-item {
                &:hover {
                    @extend .ivu-menu-item-active;
                }
            }

            .ivu-menu-submenu:hover {
                @extend .ivu-menu-item-active;
            }
        }
    }
}
</style>
<template>
    <Layout class="v-layout" :style="{ backgroundImage: cover }">
        <Header>
            <Menu mode="horizontal" theme="light" active-name="1">
                <div class="layout-logo"><strong>R</strong>ocket</div>
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
            <Sider hide-trigger>
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
import cover from "@/assets/img/cover.jpg";
export default {
    components: {},
    data() {
        return {
            cover
        };
    },
    computed: {},
    methods: {},
    mounted() {}
};
</script>
