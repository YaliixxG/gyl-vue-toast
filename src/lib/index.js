

const vueToast = {

  install(Vue, options) {
    let opt = {
      // defaultType: 'bottom', //默认显示位置
      duration: '2500' //持续时间
    }

    for (let property in options) {
      opt[property] = options[property] //使用options的配置
    }

    Vue.prototype.$toast = (tips) => {

      // if (type) opt.defaultType = type;

      if (document.getElementsByClassName('vue-toast').length) return

      let toastTpl = Vue.extend({ // 1、创建构造器，定义好提示信息的模板
        template: '<div class="vue-toast" style="position:fixed; z-index: 19;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);width:380px;height:auto;padding:10px;background:#000;opacity:.7;text-align:center;line-height:50px;color:yellow;border-radius:10px;font-size:20px;">' + tips + '</div>'
      })

      let tpl = new toastTpl().$mount().$el // 2、创建实例，挂载到文档以后的地方

      document.body.appendChild(tpl) //3、把创建的实例添加到body中

      setTimeout(_ => { //4、延迟2.5秒后移除该提示
        document.body.removeChild(tpl)
      }, 2500)
    }

    // ['bottom', 'center', 'top'].forEach(type => {
    //   Vue.prototype.$toast[type] = (tips) => {
    //     return Vue.prototype.$toast(tips, type)
    //   }
    // })


  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueToast)
}

module.exports = vueToast
