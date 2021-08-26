<template>
  <q-page padding>
    <q-btn-group spread>
      <!-- 最好每個屬性都應該要依樣 -->
      <q-btn
        icon="home"
        push
        label="one"></q-btn>
      <q-btn
        icon="person"
        label="two"></q-btn>
      <q-btn-dropdown
        label="dropdown"
        icon="group"
        split
        disable-main-btn
        auto-close
        persistent 
      >
          <q-list>
            <q-item clickable 
              to="/btnGroup/sub-route"
              v-close-popup
            >menu items
            </q-item>
          </q-list>
        </q-btn-dropdown>
    </q-btn-group>

    <br>
    <q-btn-dropdown
        label="dropdown"
        icon="group"
        split
        disable-main-btn
        auto-close
        persistent 
      >
          <q-list>
            <q-item 
              clickable 
              v-close-popup
              v-for="item in menuItems"
              :key="item.label"
              :to="item.to"
            >
            <q-item-section avatar>
              L
            </q-item-section>
            <q-item-section>
              <q-item-label>
              {{item.label}}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="school" color="blue"></q-icon>
            </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

    <br>


    <!-- 從別的地方開啟show() / 隱藏 hide() 指定的refs menu -->
    <q-btn
    @click="$refs.buttonToggle.show()"
    ></q-btn>

    <q-btn-dropdown
        label="dropdown"
        icon="group"
        split
        disable-main-btn
        auto-close
        menu-anchor="top right"
        menu-self="top left"
        :menu-offset="[30,30]"

        @show="logger"
        @before-show="beforelogger"
        ref="buttonToggle"
      >
        <div class="row no-wrap">
          <div class="column q-pa-md">
            <div class="text-h6">left</div>
            <q-toggle
              class="q-mt-sm"
              label="bluetooth"
              :value="true"
            />
            <q-toggle
              label="qpper offline"
              :value="true"
            />
          </div>

          <q-separator
            vertical
          ></q-separator>

          <div class="column items-center q-pa-md">
            <q-avatar
              color="blue"
              text-color="white"
            >
              <img class="q-pa-xs" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="">
            </q-avatar>
            Avatar
            <q-btn
              label="logout"
              no-caps
              push
              size="sm"
              class="q-mt-sm"
            ></q-btn>
          </div>
        </div>
        </q-btn-dropdown>
  </q-page>
</template>

<script>
export default {
  data (){
    return {
      menuItems:[
        {
          label: 'Ajax Bar',
          to: '/ajax-bar'
        },
        {
          label: 'Avatar',
          to: '/Avatar'
        },
        {
          label: 'btnGroup',
          to: '/btnGroup'
        },
      ]
    }
  },
  methods: {
    beforelogger(){
      console.log('before woo hoo')
      
    },
    logger(){
      console.log('woo hoo')
    },
  }
  // name: 'PageName',
};
</script>
