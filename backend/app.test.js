import { expect } from "chai";
import MessageApp from './app.js';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("app", function() {
    let testApp = new MessageApp
    it("app has messages", function() {
        expect(testApp.messages).to.be.an('array');
    });
});