"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExtensions = void 0;
var UserExtensions;
(function (UserExtensions) {
    function getFullName(user) {
        return user.name && user.lastName ?
            `${user.name} ${user.lastName}` :
            `${user.username}`;
    }
    UserExtensions.getFullName = getFullName;
})(UserExtensions || (exports.UserExtensions = UserExtensions = {}));
//# sourceMappingURL=user.extensions.js.map