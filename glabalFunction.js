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
        // let cloneOrigin = JSON.parse(JSON.stringify(origin));
        let cloneOrigin = this.deepCopy(origin);
        return cloneOrigin.filter(father => {
            let childArr = cloneOrigin.filter(child => child.pid == father.id);
            childArr.length > 0 ? father.children = childArr : '';
            return father.pid == rootId
        })
    },
    expandTree() {

    }
}