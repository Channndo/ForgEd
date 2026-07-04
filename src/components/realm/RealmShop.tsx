"use client";

import { X } from "lucide-react";
import type { RealmSave } from "@/lib/realm/types";
import {
  addItemToInventory,
  inventoryCount,
  itemDef,
  removeItemFromInventory,
} from "@/lib/realm/combat";
import { RealmSound } from "@/lib/realm/sound";

const STOCK: { id: string; price: number }[] = [
  { id: "bread", price: 6 },
  { id: "cooked_fish", price: 12 },
  { id: "bronze_sword", price: 30 },
  { id: "iron_dagger", price: 70 },
  { id: "wooden_shield", price: 40 },
  { id: "iron_shield", price: 150 },
  { id: "steel_sword", price: 250 },
];

const SELLABLE = ["bones", "logs", "raw_meat", "cooked_meat", "raw_fish", "cooked_fish", "burnt_food"];

export function RealmShop({
  save,
  onUpdate,
  onClose,
  onToast,
}: {
  save: RealmSave;
  onUpdate: (patch: Partial<RealmSave>) => void;
  onClose: () => void;
  onToast: (msg: string) => void;
}) {
  const coins = inventoryCount(save.inventory, "coins");

  const buy = (id: string, price: number) => {
    if (coins < price) {
      onToast("Pete squints at your coin pouch. \"Come back richer.\"");
      return;
    }
    let inv = removeItemFromInventory(save.inventory, "coins", price);
    inv = addItemToInventory(inv, id, 1);
    RealmSound.coin();
    onUpdate({ inventory: inv });
    onToast(`Bought ${itemDef(id).name} for ${price} coins.`);
  };

  const sell = (id: string) => {
    const qty = inventoryCount(save.inventory, id);
    if (qty <= 0) return;
    const each = Math.max(1, Math.floor((itemDef(id).value ?? 1) * 0.8));
    let inv = removeItemFromInventory(save.inventory, id, qty);
    inv = addItemToInventory(inv, "coins", each * qty);
    RealmSound.coin();
    onUpdate({ inventory: inv });
    onToast(`Sold ${qty}× ${itemDef(id).name} for ${each * qty} coins.`);
  };

  return (
    <div className="absolute inset-0 z-30 flex items-end justify-center bg-black/50 p-2 sm:items-center sm:p-4">
      <div className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-xl border border-[var(--gold)]/25 bg-[#121214] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-[var(--gold)]">Grubby Pete&apos;s General Store</p>
            <p className="text-xs text-[var(--muted)]">Your coins: {coins}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close shop">
            <X className="h-5 w-5 text-[var(--muted)]" />
          </button>
        </div>

        <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">Buy</p>
        <div className="mt-2 space-y-1.5">
          {STOCK.map(({ id, price }) => {
            const def = itemDef(id);
            return (
              <div
                key={id}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{def.glyph}</span>
                  <div>
                    <p className="text-xs text-[var(--silver)]">{def.name}</p>
                    <p className="text-[9px] text-[var(--muted)]">
                      {def.heal ? `Heals ${def.heal}` : def.weaponAttack ? `Atk +${def.weaponAttack} / Str +${def.weaponStrength}` : def.shieldDefence ? `Def +${def.shieldDefence}` : ""}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => buy(id, price)}
                  disabled={coins < price}
                  className="rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--gold)] disabled:opacity-40"
                >
                  {price}c
                </button>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          Sell (80% of value)
        </p>
        <div className="mt-2 space-y-1.5">
          {SELLABLE.filter((id) => inventoryCount(save.inventory, id) > 0).map((id) => {
            const def = itemDef(id);
            const qty = inventoryCount(save.inventory, id);
            const each = Math.max(1, Math.floor((def.value ?? 1) * 0.8));
            return (
              <div
                key={id}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{def.glyph}</span>
                  <p className="text-xs text-[var(--silver)]">
                    {def.name} × {qty}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => sell(id)}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[var(--silver)]"
                >
                  Sell all ({each * qty}c)
                </button>
              </div>
            );
          })}
          {SELLABLE.every((id) => inventoryCount(save.inventory, id) === 0) && (
            <p className="text-xs text-[var(--muted)]">Nothing Pete wants right now. Go loot something.</p>
          )}
        </div>
      </div>
    </div>
  );
}
