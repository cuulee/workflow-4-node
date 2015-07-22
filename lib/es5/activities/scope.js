"use strict";
module.exports.create = function(scopeTree, node, noWalk) {
  var obj = {
    has: function(name) {
      return scopeTree.hasProperty(node, name, noWalk);
    },
    get: function(name) {
      return scopeTree.getValue(node, name, noWalk);
    },
    set: function(name, value) {
      scopeTree.setValue(node, name, value, noWalk);
      return value;
    },
    inc: function(name) {
      return obj.set(name, obj.get(name) + 1);
    },
    dec: function(name) {
      return obj.set(name, obj.get(name) - 1);
    },
    postfixInc: function(name) {
      var v = obj.get(name);
      obj.set(name, v + 1);
      return v;
    },
    postfixDec: function(name) {
      var v = obj.get(name);
      obj.set(name, v - 1);
      return v;
    },
    add: function(name, value) {
      return obj.set(name, obj.get(name) + value);
    },
    subtract: function(name, value) {
      return obj.set(name, obj.get(name) - value);
    },
    delete: function(name) {
      return scopeTree.deleteProperty(node, name);
    }
  };
  return obj;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3BlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsS0FBSyxRQUFRLE9BQU8sRUFBSSxVQUFVLFNBQVEsQ0FBRyxDQUFBLElBQUcsQ0FBRyxDQUFBLE1BQUssQ0FBRztBQUV2RCxBQUFJLElBQUEsQ0FBQSxHQUFFLEVBQUk7QUFDTixNQUFFLENBQUcsVUFBVSxJQUFHLENBQUc7QUFDakIsV0FBTyxDQUFBLFNBQVEsWUFBWSxBQUFDLENBQUMsSUFBRyxDQUFHLEtBQUcsQ0FBRyxPQUFLLENBQUMsQ0FBQztJQUNwRDtBQUVBLE1BQUUsQ0FBRyxVQUFVLElBQUcsQ0FBRztBQUNqQixXQUFPLENBQUEsU0FBUSxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUcsS0FBRyxDQUFHLE9BQUssQ0FBQyxDQUFDO0lBQ2pEO0FBRUEsTUFBRSxDQUFHLFVBQVUsSUFBRyxDQUFHLENBQUEsS0FBSSxDQUFHO0FBQ3hCLGNBQVEsU0FBUyxBQUFDLENBQUMsSUFBRyxDQUFHLEtBQUcsQ0FBRyxNQUFJLENBQUcsT0FBSyxDQUFDLENBQUM7QUFDN0MsV0FBTyxNQUFJLENBQUM7SUFDaEI7QUFFQSxNQUFFLENBQUcsVUFBUyxJQUFHLENBQUc7QUFDaEIsV0FBTyxDQUFBLEdBQUUsSUFBSSxBQUFDLENBQUMsSUFBRyxDQUFHLENBQUEsR0FBRSxJQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQSxDQUFJLEVBQUEsQ0FBQyxDQUFDO0lBQzNDO0FBRUEsTUFBRSxDQUFHLFVBQVMsSUFBRyxDQUFHO0FBQ2hCLFdBQU8sQ0FBQSxHQUFFLElBQUksQUFBQyxDQUFDLElBQUcsQ0FBRyxDQUFBLEdBQUUsSUFBSSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUEsQ0FBSSxFQUFBLENBQUMsQ0FBQztJQUMzQztBQUVBLGFBQVMsQ0FBRyxVQUFTLElBQUcsQ0FBRztBQUN2QixBQUFJLFFBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxHQUFFLElBQUksQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQ3JCLFFBQUUsSUFBSSxBQUFDLENBQUMsSUFBRyxDQUFHLENBQUEsQ0FBQSxFQUFJLEVBQUEsQ0FBQyxDQUFDO0FBQ3BCLFdBQU8sRUFBQSxDQUFDO0lBQ1o7QUFFQSxhQUFTLENBQUcsVUFBUyxJQUFHLENBQUc7QUFDdkIsQUFBSSxRQUFBLENBQUEsQ0FBQSxFQUFJLENBQUEsR0FBRSxJQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztBQUNyQixRQUFFLElBQUksQUFBQyxDQUFDLElBQUcsQ0FBRyxDQUFBLENBQUEsRUFBSSxFQUFBLENBQUMsQ0FBQztBQUNwQixXQUFPLEVBQUEsQ0FBQztJQUNaO0FBRUEsTUFBRSxDQUFHLFVBQVMsSUFBRyxDQUFHLENBQUEsS0FBSSxDQUFHO0FBQ3ZCLFdBQU8sQ0FBQSxHQUFFLElBQUksQUFBQyxDQUFDLElBQUcsQ0FBRyxDQUFBLEdBQUUsSUFBSSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUEsQ0FBSSxNQUFJLENBQUMsQ0FBQztJQUMvQztBQUVBLFdBQU8sQ0FBRyxVQUFTLElBQUcsQ0FBRyxDQUFBLEtBQUksQ0FBRztBQUM1QixXQUFPLENBQUEsR0FBRSxJQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUcsQ0FBQSxHQUFFLElBQUksQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFBLENBQUksTUFBSSxDQUFDLENBQUM7SUFDL0M7QUFFQSxTQUFLLENBQUcsVUFBVSxJQUFHLENBQUc7QUFDcEIsV0FBTyxDQUFBLFNBQVEsZUFBZSxBQUFDLENBQUMsSUFBRyxDQUFHLEtBQUcsQ0FBQyxDQUFDO0lBQy9DO0FBQUEsRUFDSixDQUFDO0FBRUQsT0FBTyxJQUFFLENBQUM7QUF1QmQsQ0FBQTtBQUNBIiwiZmlsZSI6ImFjdGl2aXRpZXMvc2NvcGUuanMiLCJzb3VyY2VSb290IjoibGliL2VzNiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIChzY29wZVRyZWUsIG5vZGUsIG5vV2Fsaykge1xuICAgIC8vIENhbm5vdCB1c2UgcHJveHkgYmVjYXVzZSBvZiBjdXJyZW50IHY4IHByb3h5IGlzc3Vlc1xuICAgIHZhciBvYmogPSB7XG4gICAgICAgIGhhczogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZVRyZWUuaGFzUHJvcGVydHkobm9kZSwgbmFtZSwgbm9XYWxrKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVUcmVlLmdldFZhbHVlKG5vZGUsIG5hbWUsIG5vV2Fsayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHNjb3BlVHJlZS5zZXRWYWx1ZShub2RlLCBuYW1lLCB2YWx1ZSwgbm9XYWxrKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmouc2V0KG5hbWUsIG9iai5nZXQobmFtZSkgKyAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmouc2V0KG5hbWUsIG9iai5nZXQobmFtZSkgLSAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwb3N0Zml4SW5jOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgdiA9IG9iai5nZXQobmFtZSk7XG4gICAgICAgICAgICBvYmouc2V0KG5hbWUsIHYgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuXG4gICAgICAgIHBvc3RmaXhEZWM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciB2ID0gb2JqLmdldChuYW1lKTtcbiAgICAgICAgICAgIG9iai5zZXQobmFtZSwgdiAtIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5zZXQobmFtZSwgb2JqLmdldChuYW1lKSArIHZhbHVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzdWJ0cmFjdDogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmouc2V0KG5hbWUsIG9iai5nZXQobmFtZSkgLSB2YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlVHJlZS5kZWxldGVQcm9wZXJ0eShub2RlLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gb2JqO1xuICAgIC8vcmV0dXJuIFByb3h5LmNyZWF0ZShcbiAgICAvLyAgICB7XG4gICAgLy8gICAgICAgIGhhczogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAvLyAgICAgICAgICAgIHJldHVybiBzY29wZVRyZWUuaGFzUHJvcGVydHkobm9kZSwgbmFtZSk7XG4gICAgLy8gICAgICAgIH0sXG4gICAgLy9cbiAgICAvLyAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgLy8gICAgICAgICAgICByZXR1cm4gc2NvcGVUcmVlLmdldFZhbHVlKG5vZGUsIG5hbWUpO1xuICAgIC8vICAgICAgICB9LFxuICAgIC8vXG4gICAgLy8gICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICAvLyAgICAgICAgICAgIHJldHVybiBzY29wZVRyZWUuc2V0VmFsdWUobm9kZSwgbmFtZSwgdmFsdWUpO1xuICAgIC8vICAgICAgICB9LFxuICAgIC8vXG4gICAgLy8gICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAvLyAgICAgICAgICAgIHJldHVybiBzY29wZVRyZWUuZGVsZXRlUHJvcGVydHkobm9kZSwgbmFtZSk7XG4gICAgLy8gICAgICAgIH0sXG4gICAgLy9cbiAgICAvLyAgICAgICAgZW51bWVyYXRlOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgLy8gICAgICAgICAgICByZXR1cm4gc2NvcGVUcmVlLmVudW1lcmF0ZVByb3BlcnR5TmFtZXMobm9kZSk7XG4gICAgLy8gICAgICAgIH1cbiAgICAvLyAgICB9KTtcbn1cbiJdfQ==