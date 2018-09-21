var Generator = require('yeoman-generator');
module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        // this.option('babel'); // This method adds support for a `--babel` flag
        this.userAnswers = null;
    }

    prompting() {
        const self = this;
        var done = this.async();
        return this.prompt([{
            type: 'input',
            name: 'path',
            message: '请输入想要生成到的目录路径（expample: ../app/ or 绝对路径，默认当前命令行所在目录下 ）',
            default: './' // Default to current folder name
        }, {
            name: 'type',
            type: 'list',
            message: '请选择是要页面还是组件:',
            choices: [
                {
                    name: '页面',
                    value: 'page',
                    checked: true   // 默认选中
                }, {
                    name: '组件',
                    value: 'component'
                }
            ]
        }, {
            type: 'input',
            name: 'name',
            message: '页面/组件的名称',
            default: 'aName' // Default to current folder name
        }, {
            type: 'input',
            name: 'store',
            message: 'store的名称',
            default: 'stroName' // Default to current folder name
        }]).then(function (res) {
            console.log('res：', res)
            self.userAnswers = res;
            done();
        }.bind(this));

    }

    writing() {
        const { path, type, name, store } = this.userAnswers;
        let templatePath = '';
        if (type == 'page') {
            this.fs.copyTpl(
                this.templatePath('./page/stores/index.js'),
                this.destinationPath(path + name+'/stores/index.js'),
                {
                    name: name,
                    store: store,
                    storeUpperCase: store.slice(0, 1).toLocaleUpperCase()+store.slice(1)
                }
            );
            this.fs.copyTpl(
                this.templatePath('./page/stores/storeName.js'),
                this.destinationPath(path + name+'/stores/'+store+'.js'),
                { 
                    name: name,
                    store: store,
                    storeUpperCase: store.slice(0, 1).toLocaleUpperCase()+store.slice(1)
                }
            );
            this.fs.copyTpl(
                this.templatePath('./page/components/'),
                this.destinationPath(path + name+'/components/'),
                { 
                    name: name,
                    store: store,
                    storeUpperCase: store.slice(0, 1).toLocaleUpperCase()+store.slice(1)
                }
            );
            this.fs.copyTpl(
                this.templatePath('./page/js/'),
                this.destinationPath(path + name+'/js/'),
                { 
                    name: name,
                    store: store,
                    storeUpperCase: store.slice(0, 1).toLocaleUpperCase()+store.slice(1)
                }
            );
            this.fs.copyTpl(
                this.templatePath('./page/app.js'),
                this.destinationPath(path + name+'/app.js'),
                { 
                    name: name,
                    store: store,
                    storeUpperCase: store.slice(0, 1).toLocaleUpperCase()+store.slice(1)
                }
            );
        } else {
            templatePath = './component';
            this.fs.copyTpl(
                this.templatePath(templatePath),
                this.destinationPath(path + name),
                { 
                    name: name,
                    store: store,
                    storeUpperCase: store.slice(0, 1).toLocaleUpperCase()+store.slice(1)
                }
            );
        }

    }


};