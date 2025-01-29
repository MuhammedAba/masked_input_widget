/** @odoo-module **/

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component, useState } from "@odoo/owl";

export class StarField extends Component {
    setup() {
        //console.log("Star Field inherited");
        this.state = useState({
            isEditing: false, // Kullanıcı düzenleme yapıyor mu?
            maskedValue: this.getMaskedValue(this.props.value), // Maskelenmiş değer
        });
    }

    // Maskelenmiş değeri oluşturur (ilk 2 ve son 2 karakter hariç)
    getMaskedValue(value) {
        if (!value || value.length <= 4) {
            return value; // Eğer 4 veya daha az karakter varsa, maskeleme yapılmaz
        }
        const start = value.slice(0, 2); // İlk iki karakter
        const end = value.slice(-2); // Son iki karakter
        const mask = '*'.repeat(value.length - 4); // Ortadaki yıldızlar
        return `${start}${mask}${end}`;
    }

    // Düzenleme moduna geçiş
    startEditing() {
        this.state.isEditing = true;
    }

    // Girişi işler ve sunucuya gönderilecek değeri ayarla
    onInput(event) {
        this.props.update(event.target.value); // Gerçek değeri kaydet
    }

    // Düzenleme modunu kapat ve maskeli görünümü uygula
    stopEditing() {
        this.state.isEditing = false;
        this.state.maskedValue = this.getMaskedValue(this.props.value); // Maskeyi yeniden oluştur
    }
}

StarField.template = "owl.StarField";
StarField.props = {
    ...standardFieldProps,
};
StarField.supportedTypes = ["char"];
registry.category("fields").add("masked", StarField);
