"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardingAddress = exports.MangopayOnboarding = exports.KycDocument = exports.BirthPlace = exports.Ubo = exports.UboDeclaration = exports.Person = exports.LegalUser = exports.IdentityProofType = exports.KycDocumentType = exports.LegalUserType = exports.OnboardingType = void 0;
__exportStar(require("./domains/domain_pb"), exports);
__exportStar(require("./finances/vat_pb"), exports);
__exportStar(require("./finances/finances_service_grpc_pb"), exports);
__exportStar(require("./finances/finances_service_pb"), exports);
__exportStar(require("./integrators/integrator_pb"), exports);
__exportStar(require("./messages/message_pb"), exports);
__exportStar(require("./messages/messages_service_grpc_pb"), exports);
__exportStar(require("./messages/messages_service_pb"), exports);
__exportStar(require("./payments/payment_pb"), exports);
__exportStar(require("./payments/payments_service_grpc_pb"), exports);
__exportStar(require("./payments/payments_service_pb"), exports);
__exportStar(require("./payments/mangopay/checkout_pb"), exports);
var onboarding_pb_1 = require("./payments/mangopay/onboarding_pb");
Object.defineProperty(exports, "OnboardingType", { enumerable: true, get: function () { return onboarding_pb_1.OnboardingType; } });
Object.defineProperty(exports, "LegalUserType", { enumerable: true, get: function () { return onboarding_pb_1.LegalUserType; } });
Object.defineProperty(exports, "KycDocumentType", { enumerable: true, get: function () { return onboarding_pb_1.KycDocumentType; } });
Object.defineProperty(exports, "IdentityProofType", { enumerable: true, get: function () { return onboarding_pb_1.IdentityProofType; } });
Object.defineProperty(exports, "LegalUser", { enumerable: true, get: function () { return onboarding_pb_1.LegalUser; } });
Object.defineProperty(exports, "Person", { enumerable: true, get: function () { return onboarding_pb_1.Person; } });
Object.defineProperty(exports, "UboDeclaration", { enumerable: true, get: function () { return onboarding_pb_1.UboDeclaration; } });
Object.defineProperty(exports, "Ubo", { enumerable: true, get: function () { return onboarding_pb_1.Ubo; } });
Object.defineProperty(exports, "BirthPlace", { enumerable: true, get: function () { return onboarding_pb_1.BirthPlace; } });
Object.defineProperty(exports, "KycDocument", { enumerable: true, get: function () { return onboarding_pb_1.KycDocument; } });
Object.defineProperty(exports, "MangopayOnboarding", { enumerable: true, get: function () { return onboarding_pb_1.MangopayOnboarding; } });
Object.defineProperty(exports, "OnboardingAddress", { enumerable: true, get: function () { return onboarding_pb_1.Address; } });
__exportStar(require("./transactions/transaction_pb"), exports);
__exportStar(require("./transactions/transactions_service_grpc_pb"), exports);
__exportStar(require("./transactions/transactions_service_pb"), exports);
__exportStar(require("./transactions/activity/activity_pb"), exports);
__exportStar(require("./users/user_pb"), exports);
__exportStar(require("./users/users_service_grpc_pb"), exports);
__exportStar(require("./users/users_service_pb"), exports);
