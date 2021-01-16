class FamilyTree {
  constructor(name) {
    if (name === undefined) {
      throw 'Please provide a name for your family member node';
    } else if (typeof name !== 'string') {
      throw 'Please provide a name in the form of a string';
    } else {
      this.value = name;
    }

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
      return child.value === member;
    });
    if (foundMember.length > 0) {
      return foundMember[0];
    }
  }

  log() {
    let logArray = [];
    let logText = '';
    logText += `-- ${this.value}`;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].children.length === 0) {
        let childText = `
---- ${this.children[i].value}`;
        logText += childText;
      } else {
        let childText = `
---- ${this.children[i].value}`;
        logText += childText;
        for (let j = 0; j < this.children[i].children.length; j++) {
          let childText = `
------ ${this.children[i].children[j].value}`;
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
