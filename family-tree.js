class FamilyTree {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  insert(child) {
    if (child) {
      this.children.push(new FamilyTree(child));
    }
  }

  familySize() {
    return this.children.length + 1;
  }

  findMember(member) {
    let foundMember = this.children.filter((child) => {
      return child.name === member;
    });
    if (foundMember.length > 0) {
      return foundMember[0];
    }
  }

  log() {
    let logArray = [];
    let logText = '';
    logText += `-- ${this.name}`;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].children.length === 0) {
        let childText = `
---- ${this.children[i].name}`;
        logText += childText;
      } else {
        let childText = `
---- ${this.children[i].name}`;
        logText += childText;
        for (let j = 0; j < this.children[i].children.length; j++) {
          let childText = `
------ ${this.children[i].children[j].name}`;
          logText += childText;
        }
      }
    }
    logArray.push(logText);
    console.log(logArray[0]);
    return logArray[0];
  }
}

module.exports = FamilyTree;
