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
    for (let i = 0; i < this.children.length; i++) {
      let currChild = this.children[i];
      if (member === currChild.value) {
        return currChild;
      }
    }
  }

  log() {
    let logArray = [];
    logArray.push(`-- ${this.value}`);

    for (let i = 0; i < this.children.length; i++) {
      let currChild = this.children[i];
      logArray.push(`---- ${currChild.value}`);
      if (currChild.children) {
        for (let j = 0; j < currChild.children.length; j++) {
          let currGrandchild = currChild.children[j];
          logArray.push(`------ ${currGrandchild.value}`);
        }
      }
    }
    console.log(logArray.join('\n'));
    return logArray.join('\n');
  }
}

module.exports = FamilyTree;
