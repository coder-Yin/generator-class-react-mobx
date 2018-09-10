var Generator = require('yeoman-generator');
module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
  
      // Next, add your custom code
      // this.option('babel'); // This method adds support for a `--babel` flag
      this.userAnswers = null;

      console.log('-------------:',1);
    }

    // paths() {
    //   this.destinationRoot();
    // }

    async prompting() {
      console.log('-------------:',2);
      // const answers = await this.prompt([{
      //   name: 'type',
      //   type: 'list',
      //   message: '请选择是要页面还是组件:',
      //   choices: [
      //       {
      //           name: '页面',
      //           value: 'page',
      //           checked: true   // 默认选中
      //       },{
      //           name: '组件',
      //           value: 'component'
      //       }
      //   ]
      // }, {
      //   type    : 'input',
      //   name    : 'name',
      //   message : '页面/组件的名称',
      //   default : 'aName' // Default to current folder name
      // }]);
      
      // console.log('-------------:',3);
      // this.userAnswers = answers;
    }

    writing() {
      // console.log('-------------:',4);
      // const {type, name} = this.userAnswers;
      // let templatePath = '';
      // if (type == 'page') {
      //   templatePath = './page/index.html';
      // } else {
      //   templatePath = './component/index.html';
      // }

      const templatePath = './component/index.html';
      this.fs.copyTpl(
        this.templatePath(templatePath),
        this.destinationPath('./test.html'),
        { title: '123' }
      );
      
    }


  };