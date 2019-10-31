export default {
    /**
     * @param {option} 需要深拷贝的对象 
     */
    deepCopy(option) {
        return JSON.parse(JSON.stringify(option));
    },
    /**
     * @method {toTree} 将有父子关系的数据整理成树结构
     * @param {origin} 需要处理的源数据
     * @param {rootId} tree根节点id 
     */
    toTree(origin, rootId) {
        let cloneOrigin = this.deepCopy(origin);
        return cloneOrigin.filter(father => {
            let childArr = cloneOrigin.filter(child => child.pid == father.id);
            childArr.length > 0 ? father.children = childArr : '';
            return father.pid == rootId
        })
    },
    /**
     * 
     * @param {treeData} Array 
     * @param {treeKey} Array 每一个树节点的属性
     */
    expandTree(treeData, treeKey) {
        let stack = this.deepCopy(treeData),
            data = [];
        while (stack.length != 0) {

            let pop = stack.pop();
            let json = {};
            for (let val of treeKey) {
                json[val] = pop[val]
            }
            data.push(json);
            let children = pop.children
            if (children) {
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i])
                }
            }
        }
        return data;
    }
}