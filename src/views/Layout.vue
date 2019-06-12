<template>
    <Layout class="v-layout">
        <Header>
            <Menu mode="horizontal" theme="light" active-name="1">
                <div class="layout-logo">
                    <img :src="logo" width="60" height="60" />ocket
                </div>
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
                <Menu
                    theme="light"
                    width="auto"
                    :active-name="activeName"
                    :open-names="openName"
                >
                    <Submenu
                        v-for="(menu, mIndex) in menus"
                        :name="mIndex"
                        :key="mIndex"
                    >
                        <template slot="title">
                            <Icon :type="menu.icon" />
                            {{ menu.text }}
                        </template>
                        <MenuItem
                            v-for="(item, index) in menu.children"
                            :key="index"
                            :name="`${mIndex}-${index}`"
                            :to="{ name: item.name }"
                        >
                            {{ item.text }}
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
import logo from "@/assets/img/rocket.svg";
export default {
    components: {},
    data() {
        console.dir(this.$route.name);
        return {
            logo,
            menus: [
                {
                    text: "账号管理",
                    icon: "ios-navigate",
                    children: [
                        {
                            name: "userList",
                            text: "用户管理"
                        },
                        {
                            name: "roleList",
                            text: "角色管理"
                        },
                        {
                            name: "authList",
                            text: "权限列表"
                        }
                    ]
                },
                {
                    text: "Rocket",
                    icon: "ios-navigate",
                    children: [
                        {
                            name: "RocketForm",
                            text: "RocketForm"
                        },
                        {
                            name: "RocketToolbar",
                            text: "RocketToolbar"
                        }
                    ]
                }
            ],
            activeName: "0-0",
            openName: [0, 1]
        };
    },
    computed: {},
    methods: {
        initRoute() {
            const Tree = it => it.name;
        }
    },
    mounted() {
        this.initRoute();
        this.$router.push({ name: "userList" });
    }
};
</script>
